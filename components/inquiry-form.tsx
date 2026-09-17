"use client";

import { useActionState } from "react";
import { submitInquiry, type InquiryActionResponse } from "@/lib/actions/inquiry";

const initialState: InquiryActionResponse | null = null;

export default function InquiryForm() {
  const [state, formAction, isPending] = useActionState(
    submitInquiry,
    initialState
  );

  return (
    <section className="relative" id="contact">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800/80">
          <div className="mx-auto max-w-3xl text-center pb-8 md:pb-12">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              Get in touch with our team
            </h2>
            <p className="mt-4 text-lg text-indigo-200/65" data-aos="fade-up" data-aos-delay={200}>
              Have questions about integrating Open React or custom team plans? Send us an inquiry.
            </p>
          </div>

          <div
            className="mx-auto max-w-xl rounded-2xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm sm:p-8"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <form action={formAction} className="space-y-4">
              <div>
                <label
                  htmlFor="inquiry-name"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-400"
                >
                  Full Name
                </label>
                <input
                  id="inquiry-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Alex Doe"
                  className="form-input w-full rounded-lg border border-gray-700/80 bg-gray-950/70 px-4 py-2.5 text-sm text-gray-200 placeholder-gray-500 shadow-inner focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  disabled={isPending}
                />
                {state?.errors?.name && (
                  <p className="mt-1 text-xs text-rose-400">{state.errors.name[0]}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="inquiry-email"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-400"
                >
                  Work Email
                </label>
                <input
                  id="inquiry-email"
                  name="email"
                  type="email"
                  required
                  placeholder="alex@company.com"
                  className="form-input w-full rounded-lg border border-gray-700/80 bg-gray-950/70 px-4 py-2.5 text-sm text-gray-200 placeholder-gray-500 shadow-inner focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  disabled={isPending}
                />
                {state?.errors?.email && (
                  <p className="mt-1 text-xs text-rose-400">{state.errors.email[0]}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="inquiry-message"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="inquiry-message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your project or questions..."
                  className="form-textarea w-full rounded-lg border border-gray-700/80 bg-gray-950/70 px-4 py-2.5 text-sm text-gray-200 placeholder-gray-500 shadow-inner focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  disabled={isPending}
                />
                {state?.errors?.message && (
                  <p className="mt-1 text-xs text-rose-400">{state.errors.message[0]}</p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isPending}
                  className="btn group w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-3 text-sm font-medium text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] disabled:opacity-50"
                >
                  <span className="relative inline-flex items-center">
                    {isPending ? "Sending Inquiry..." : "Submit Inquiry"}
                    {!isPending && (
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    )}
                  </span>
                </button>
              </div>

              {state && (
                <div
                  className={`mt-4 rounded-lg p-3 text-center text-xs ${
                    state.success
                      ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                      : "border border-rose-500/30 bg-rose-500/10 text-rose-400"
                  }`}
                >
                  {state.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
