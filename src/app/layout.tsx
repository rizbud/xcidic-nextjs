"use client";

import { Orbitron } from "next/font/google";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "~/services/query-client";

import "./globals.css";

const orbitron = Orbitron({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={orbitron.className}>
        <QueryClientProvider client={queryClient}>
          <main className="flex min-h-screen flex-col items-center justify-center">
            {children}
          </main>
        </QueryClientProvider>
      </body>
    </html>
  );
}
