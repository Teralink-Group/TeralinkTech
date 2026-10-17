
export type EnquiryFormType =
  | "contact"
  | "request-quote-&-survey";

type EnquiryResult = {
  success: boolean;
  message: string;
};

type EnquiryFields = Record<string, string | string[]>;

export async function submitEnquiry(
  form: HTMLFormElement,
  formType: EnquiryFormType
): Promise<EnquiryResult> {
  const formData = new FormData(form);
  const fields: EnquiryFields = {};

  for (const [key, value] of formData.entries()) {
    if (typeof value !== "string") continue;

    const existing = fields[key];

    if (existing === undefined) {
      fields[key] = value;
    } else if (Array.isArray(existing)) {
      existing.push(value);
    } else {
      fields[key] = [existing, value];
    }
  }

  fields.privacyConsent = formData.has("privacyConsent")
    ? "true"
    : "";

  if (!formData.has("services")) {
    fields.services = [];
  }

  let response: Response;

  try {
    response = await fetch("/api/enquiries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formType,
        fields,
      }),
    });
  } catch {
    throw new Error(
      "Unable to connect to the server. Please check your internet connection and try again."
    );
  }

  let result: Partial<EnquiryResult> = {};

  try {
    result = (await response.json()) as Partial<EnquiryResult>;
  } catch {
    // Handle a response that isn't valid JSON.
  }

  if (!response.ok || result.success !== true) {
    throw new Error(
      result.message ||
        "Unable to submit your enquiry. Please try again later."
    );
  }

  return {
    success: true,
    message:
      result.message ||
      "Your enquiry has been submitted successfully.",
  };
}
