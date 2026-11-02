"use client";

import { useActionState } from "react";
import Link from "next/link";
import { login } from "../app/login/actions";

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(login, null);

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
        {pending ? "Logging in..." : "Log in"}
      </button>
      {state?.error && <p className="text-red-600">{state.error}</p>}
      <p>
        Don't have an account?{" "}
        <Link href="/signup" className="underline">
          Sign up
        </Link>
      </p>
    </form>
  );
}
