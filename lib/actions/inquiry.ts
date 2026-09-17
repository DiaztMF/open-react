"use server";

import { z } from "zod";
import { insertInquiry } from "@/lib/queries";

const InquirySchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.string().trim().email("Please provide a valid email address"),
  message: z.string().trim().min(5, "Message must be at least 5 characters"),
});

export type InquiryActionResponse = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitInquiry(
  prevState: InquiryActionResponse | null,
  formData: FormData
): Promise<InquiryActionResponse> {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const validated = InquirySchema.safeParse(rawData);
  if (!validated.success) {
    return {
      success: false,
      message: "Please fill in all required fields properly",
      errors: validated.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await insertInquiry(validated.data);
    if (result.fallback) {
      return {
        success: true,
        message: "Your inquiry has been recorded! (Demo preview mode)",
      };
    }
    return {
      success: true,
      message: "Thank you! We have received your inquiry and will be in touch soon.",
    };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to submit inquiry";
    return {
      success: false,
      message: errorMessage,
    };
  }
}
