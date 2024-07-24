"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function DictonaryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const slug = pathname.split("/")[1];
  return (
    <div className="flex flex-col w-full dark:bg-[rgba(0,0,0,0.9)]">
      <header className="w-full h-[60px] p-4 dark:bg-[#21130d]">
        <h3 className="text-xl tracking-widest text-gray-800 dark:text-white font-semibold">
          {slug.toUpperCase()}
        </h3>
      </header>
      <hr className="bg-black w-full shadow-lg" />
      {children}
    </div>
  );
}
