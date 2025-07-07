"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface UseAuthOptions {
  required?: boolean;
  redirectTo?: string;
}

export function useAuth(required: boolean = false, redirectTo: string = "/auth/signin") {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (required && status === "unauthenticated") {
      router.push(redirectTo);
    }
  }, [required, status, router, redirectTo]);

  return {
    user: session?.user,
    session,
    loading: status === "loading",
    authenticated: status === "authenticated",
  };
}