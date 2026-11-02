"use client";

import { useActionState } from "react";
import Link from "next/link";
import { signup } from "../app/login/actions";

export default function SignupForm() {
  const [state, formAction, pending] = useActionState(signup, null);

  return (
    <form action={formAction} className="flex max-w-sm flex-col gap-3">
      <input
        name="email"
        type="email"
        placeholder="College email"
        required
        className="rounded border p-2"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        required
        className="rounded border p-2"
      />
      <button type="submit" disabled={pending} className="rounded border p-2">
        {pending ? "Signing up..." : "Sign up"}
      </button>
      {state?.error && <p className="text-red-600">{state.error}</p>}
      <p>
        Already have an account?{" "}
        <Link href="/login" className="underline">
          Log in
        </Link>
      </p>
    </form>
  );
}
