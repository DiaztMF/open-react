"use server";

import { z } from "zod";
import { insertNewsletter } from "@/lib/queries";

const NewsletterSchema = z.object({
  email: z.string().trim().email("Please provide a valid email address"),
});

export type ActionResponse = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function subscribeNewsletter(
  prevState: ActionResponse | null,
  formData: FormData
): Promise<ActionResponse> {
  const rawEmail = formData.get("email");

  const validated = NewsletterSchema.safeParse({ email: rawEmail });
  if (!validated.success) {
    return {
      success: false,
      message: "Invalid email format",
      errors: validated.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await insertNewsletter({ email: validated.data.email });
    if (result.fallback) {
      return {
        success: true,
        message: "Thanks for subscribing! (Demo preview mode)",
      };
    }
    return {
      success: true,
      message: "You have been successfully subscribed to updates!",
    };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to subscribe";
    return {
      success: false,
      message: errorMessage,
    };
  }
}
