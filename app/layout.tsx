import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { AuthProvider } from "@/components/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Easy Habits",
  description: "Make habits easyCreate habits and change yourself easily and quickly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          <Navigation />
          <main className="max-w-screen-sm mx-auto px-2.5">{children}</main>
        </body>
      </AuthProvider>
    </html>
  );
}
