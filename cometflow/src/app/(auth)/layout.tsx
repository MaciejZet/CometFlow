"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const pathname = usePathname();
  const isSignIn = pathname === "/sign-in";

  return (
    <main className="min-h-screen bg-neutral-100">
        <div className="mx-auto max-w-screen-2xl p-4">
          <nav className="flex justify-between items-center">
              <Image src="/logo.svg" alt="Logo" width={60} height={60} />
              <div className="flex items-center gap-2">
                <Button asChild variant="secondary">
                  <Link href={isSignIn ? "/sign-up" : "/sign-in"}>
                    {isSignIn ? "Sign Up" : "Login"}
                  </Link>
                </Button>
              </div>
          </nav>
          <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
        {children}
        </div>
        </div>
    </main>
  );
};

export default AuthLayout;