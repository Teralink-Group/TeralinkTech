
export type EnquiryFormType = "contact" | "site-survey" | "quotation";

export async function submitEnquiry(
  form: HTMLFormElement,
  formType: EnquiryFormType
): Promise<{ success: boolean; message: string }> {
  const formData = new FormData(form);
  const fields: Record<string, string | string[]> = {};

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

  // Make unchecked privacy checkboxes fail server-side validation.
  if (!formData.has("privacyConsent")) {
    fields.privacyConsent = "";
  } else {
    fields.privacyConsent = "true";
  }

  const response = await fetch("/api/enquiries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formType, fields }),
  });

  const result = (await response.json().catch(() => ({}))) as {
    success?: boolean;
    message?: string;
  };

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Unable to submit the form.");
  }

  return {
    success: true,
    message: result.message || "Your enquiry has been submitted.",
  };
}
