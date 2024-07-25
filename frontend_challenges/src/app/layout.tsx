import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const challengesLinks = [
    {
      label: "Dictionary App",
      link: "/dictionary",
    },
  ];
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen max-h-screen flex-row w-full`}
      >
        {/* this will be common to all pages */}
        <header className="w-[280px] h-screen bg-[#21130d] dark:bg-black flex flex-col justify-start items-start">
          <Link className="text-white text-xl p-4 font-bold" href={"/"}>
            Frontend{" "}
            <span className="text-yellow-300 italic font-bold">Challenges</span>
          </Link>
          <hr className="bg-white w-full" />
          <div className="flex flex-col justify-start gap-2 p-4 py-10">
            {challengesLinks?.map((challenge) => {
              return (
                <Link
                  className="text-white text-lg font-semibold"
                  key={challenge?.label}
                  href={challenge.link}
                >
                  {challenge?.label}
                </Link>
              );
            })}
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
