"use client";

import { Inter } from "next/font/google";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "~/services/query-client";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <main className="flex min-h-screen flex-col items-center justify-between p-16 mx-auto max-w-screen-lg">
            <div className="flex flex-col items-center w-full">{children}</div>
          </main>
        </QueryClientProvider>
      </body>
    </html>
  );
}
