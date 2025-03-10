"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { getServerClient } from "@/lib/supabase/server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function login(formData: any) {
  const supabase = await getServerClient();
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  console.log(data);

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log(error);
    redirect("/login");
  }

  console.log("登录成功");
  revalidatePath("/", "layout");
  redirect((process.env.NEXT_PUBLIC_NEXT_LGOIN_URL as string) || "/");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function signup(formData: any) {
  const supabase = await getServerClient();

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/login");
  }

  revalidatePath("/", "layout");
  redirect("/login");
}
