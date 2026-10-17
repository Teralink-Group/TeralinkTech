
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type FormType = "contact" | "request-quote-&-survey";
type FieldValue = string | string[];

type EnquiryPayload = {
  formType: FormType;
  fields: Record<string, FieldValue>;
};

const allowedFormTypes = new Set<FormType>([
  "contact",
  "request-quote-&-survey",
]);

const requiredFields: Record<FormType, string[]> = {
  contact: [
    "name",
    "email",
    "phone",
    "location",
    "message",
    "privacyConsent",
  ],
  "request-quote-&-survey": [
    "name",
    "email",
    "phone",
    "privacyConsent",
  ],
};

const recipients = [
  "it@teralink.ae",
  "nealbhuniya01@gmail.com",
];

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

function normalizeFields(
  fields: Record<string, unknown>
): Record<string, FieldValue> {
  const normalized: Record<string, FieldValue> = {};

  for (const [key, value] of Object.entries(fields)) {
    if (!/^[a-zA-Z0-9_-]{1,60}$/.test(key)) {
      continue;
    }

    if (Array.isArray(value)) {
      normalized[key] = value
        .filter(
          (item): item is string =>
            typeof item === "string"
        )
        .slice(0, 50)
        .map((item) => item.trim().slice(0, 500));
    } else if (typeof value === "string") {
      normalized[key] = value.trim().slice(0, 5000);
    }
  }

  return normalized;
}

function getField(
  fields: Record<string, FieldValue>,
  key: string
): string {
  const value = fields[key];

  return Array.isArray(value)
    ? value.join(", ")
    : value ?? "";
}

export async function POST(request: Request) {
  try {
    const contentLength = Number(
      request.headers.get("content-length") || 0
    );

    if (contentLength > 50_000) {
      return NextResponse.json(
        { success: false, message: "The submitted form is too large." },
        { status: 413 }
      );
    }

    let body: Partial<EnquiryPayload>;

    try {
      body = (await request.json()) as Partial<EnquiryPayload>;
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid request body." },
        { status: 400 }
      );
    }

    if (
      typeof body.formType !== "string" ||
      !allowedFormTypes.has(body.formType as FormType) ||
      !body.fields ||
      typeof body.fields !== "object" ||
      Array.isArray(body.fields)
    ) {
      return NextResponse.json(
        { success: false, message: "Invalid form submission." },
        { status: 400 }
      );
    }

    const formType = body.formType as FormType;

    const fields = normalizeFields(
      body.fields as Record<string, unknown>
    );

    // Honeypot spam protection.
    if (getField(fields, "website")) {
      return NextResponse.json({
        success: true,
        message: "Submission received.",
      });
    }

    // Validate required fields for the submitted form.
    for (const field of requiredFields[formType]) {
      if (!getField(fields, field)) {
        return NextResponse.json(
          {
            success: false,
            message: `Please complete the ${field} field.`,
          },
          { status: 400 }
        );
      }
    }

    const email = getField(fields, "email");

    if (
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid email address.",
        },
        { status: 400 }
      );
    }

    if (getField(fields, "privacyConsent") !== "true") {
      return NextResponse.json(
        {
          success: false,
          message: "Please accept the privacy consent.",
        },
        { status: 400 }
      );
    }

    // SMTP settings configured in Vercel.
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM;

    if (
      !smtpHost ||
      !smtpUser ||
      !smtpPass ||
      !smtpFrom ||
      !Number.isInteger(smtpPort) ||
      smtpPort < 1 ||
      smtpPort > 65535
    ) {
      console.error("Enquiry SMTP configuration is incomplete.");

      return NextResponse.json(
        {
          success: false,
          message:
            "Email service is not configured yet. Please try again later.",
        },
        { status: 503 }
      );
    }

    const formTitles: Record<FormType, string> = {
      contact: "Contact Enquiry",
      "request-quote-&-survey":
        "Request a Quote & Site Survey",
    };

    const title = formTitles[formType];

    // Exclude internal consent and honeypot fields from the email.
    const visibleFields = Object.entries(fields).filter(
      ([key]) =>
        key !== "privacyConsent" &&
        key !== "website"
    );

    const rows = visibleFields
      .map(([key, value]) => {
        const displayValue = Array.isArray(value)
          ? value.join(", ")
          : value;

        const readableKey = key
          .replace(/([A-Z])/g, " $1")
          .replace(/[_-]/g, " ")
          .replace(/\s+/g, " ")
          .trim()
          .replace(/^./, (character) =>
            character.toUpperCase()
          );

        return `
          <tr>
            <td style="padding:10px;border:1px solid #dcebe7;font-weight:600;vertical-align:top;">
              ${escapeHtml(readableKey)}
            </td>
            <td style="padding:10px;border:1px solid #dcebe7;white-space:pre-wrap;overflow-wrap:anywhere;">
              ${escapeHtml(displayValue || "Not provided")}
            </td>
          </tr>
        `;
      })
      .join("");

    const textBody = [
      `Teralink ${title}`,
      "",
      "A new enquiry has been submitted through the website.",
      "",
      ...visibleFields.map(([key, value]) => {
        const displayValue = Array.isArray(value)
          ? value.join(", ")
          : value;

        return `${key}: ${displayValue || "Not provided"}`;
      }),
    ].join("\n");

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure:
        process.env.SMTP_SECURE === "true" ||
        smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      connectionTimeout: 15000,
      greetingTimeout: 15000,
      socketTimeout: 20000,
    });

    await transporter.sendMail({
      from: smtpFrom,
      to: recipients,
      replyTo: email,
      subject: `Teralink ${title} — ${getField(
        fields,
        "name"
      ).slice(0, 100)}`,
      text: textBody,
      html: `
        <div style="font-family:Arial,sans-serif;color:#163d3a;max-width:760px;margin:auto;">
          <h2 style="color:#003c3c;">
            New Teralink ${escapeHtml(title)}
          </h2>

          <p>
            A new enquiry has been submitted through the website.
          </p>

          <table style="width:100%;border-collapse:collapse;">
            ${rows}
          </table>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message:
        "Thank you. Your enquiry has been submitted successfully.",
    });
  } catch (error) {
    console.error("Enquiry submission failed:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "We couldn't submit your enquiry. Please try again later.",
      },
      { status: 500 }
    );
  }
}
