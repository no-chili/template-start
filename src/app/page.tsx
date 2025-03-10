"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Link href="/login">Login</Link>
    </div>
  );
}
