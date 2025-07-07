"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isAuthPage = pathname?.startsWith("/auth");

  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="min-h-screen flex flex-col">
          {!isHomePage && !isAuthPage && <Header />}
          <main className={isHomePage || isAuthPage ? "flex-1" : "flex-1 pt-16"}>
            {children}
          </main>
          {!isHomePage && !isAuthPage && <Footer />}
        </div>
      </ThemeProvider>
    </SessionProvider>
  );
}