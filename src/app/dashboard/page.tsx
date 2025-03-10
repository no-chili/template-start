import LogoutButton from "@/app/dashboard/components/logout_button";
import { getServerClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function PrivatePage() {
  const supabase = await getServerClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error || !user) {
    redirect("/login");
  }

  return (
    <div>
      <p>Hello {user?.email}</p>
      <LogoutButton />
    </div>
  );
}
