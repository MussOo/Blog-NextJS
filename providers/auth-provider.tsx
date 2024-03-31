"use client";

import { SessionProvider } from "next-auth/react";
import { QueryClientProvider, QueryClient } from "react-query";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
