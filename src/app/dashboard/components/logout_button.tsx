"use client";

import { getBrowserClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  async function handleLogout() {
    const supabase = await getBrowserClient();
    await supabase.auth.signOut();
    router.push("/login");
  }
  return (
    <div>
      <button onClick={handleLogout}>退出登录</button>
    </div>
  );
}
