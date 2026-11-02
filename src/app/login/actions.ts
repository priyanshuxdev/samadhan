"use server";

import {redirect} from "next/navigation";
import {createClient} from "@/lib/supabase/server"

export type FormState = { error: String } | null;

export async function login(
    _prev: FormState,
    formData: FormData
): Promise<FormState> {
    const supabase = await createClient();
    const { error } = await supabase.auth.signInWithPassword({
        email: String(formData.get("email")),
        password: String(formData.get("password")),
    });

    if (error) {
        return { error: error.message };
    }

    redirect("/issues");
}

export async function signup(
    _prev: FormState,
    formData: FormData
): Promise<FormState> {
    const supabase = await createClient();
    const { error } = await supabase.auth.signUp({
        email: String(formData.get("email")),
        password: String(formData.get("password")),
    });

    if (error) {
        return { error: error.message };
    }

    redirect("/issues");
}   
