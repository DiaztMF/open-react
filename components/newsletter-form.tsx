"use client";

import { useActionState } from "react";
import { subscribeNewsletter, type ActionResponse } from "@/lib/actions/newsletter";

const initialState: ActionResponse | null = null;

export default function NewsletterForm() {
  const [state, formAction, isPending] = useActionState(
    subscribeNewsletter,
    initialState
  );

  return (
    <div className="mx-auto max-w-md">
      <form action={formAction} className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <input
            id="newsletter-email"
            type="email"
            name="email"
            required
            placeholder="Enter your email address..."
            className="form-input w-full rounded-lg border border-gray-700/80 bg-gray-900/80 px-4 py-2.5 text-sm text-gray-200 placeholder-gray-500 shadow-inner focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            disabled={isPending}
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="btn group bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] px-5 py-2.5 text-sm font-medium text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] disabled:opacity-50"
        >
          <span className="relative inline-flex items-center">
            {isPending ? "Subscribing..." : "Subscribe"}
            {!isPending && (
              <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                -&gt;
              </span>
            )}
          </span>
        </button>
      </form>

      {state && (
        <div
          className={`mt-3 text-center text-xs ${
            state.success ? "text-emerald-400" : "text-rose-400"
          }`}
        >
          {state.message}
        </div>
      )}
    </div>
  );
}
