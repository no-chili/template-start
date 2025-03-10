import Form from "@/app/login/components/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getBrowserClient } from "@/lib/supabase/client";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const supabase = await getBrowserClient();
  const { data } = await supabase.auth.getUser();
  if (data.user && data.user.confirmed_at) {
    redirect((process.env.NEXT_PUBLIC_NEXT_LGOIN_URL as string) || "/");
  }

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="text-2xl text-center">欢迎回来</CardTitle>
          <CardDescription className="text-center">
            请选择登录方式
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form />
        </CardContent>
      </Card>
    </div>
  );
}
