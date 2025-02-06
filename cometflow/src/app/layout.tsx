import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";


const nunitoSans = Nunito_Sans({ subsets: ["latin"],});


export const metadata: Metadata = {
  title: "CometDesk",
  description: "Talk With Your Data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(nunitoSans.className, "antialiased min-h-screen")}
      >
        {children}
      </body>
    </html>
  );
}
