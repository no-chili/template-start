"use client";

import { login, signup } from "@/app/login/actions";
import { getBrowserClient } from "@/lib/supabase/client";
import toast from "react-hot-toast";

export default function Form() {
  async function handleGoogleLogin() {
    const supabase = await getBrowserClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
    toast.loading("正在登录...");
  }

  return (
    <div>
      <form className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            邮箱地址
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="请输入邮箱"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700"
          >
            密码
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="请输入密码"
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button
            formAction={login}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            登录
          </button>
          <button
            formAction={signup}
            className="flex-1 bg-gray-50 text-gray-900 px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
          >
            注册
          </button>
        </div>
      </form>
      {/* 其他方式 */}
      <div className="flex flex-col space-y-2 mt-4">
        <button
          onClick={handleGoogleLogin.bind(null)}
          className="flex-1 bg-gray-50 text-gray-900 px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
        >
          谷歌登录
        </button>
      </div>
    </div>
  );
}
