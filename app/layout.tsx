import type { Metadata } from "next";
import { Header } from "@/components";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 text-slate-400`}>
        <Header />
        <main className="container mx-auto pt-16 px-5 md:px-0 ">{children}</main>
      </body>
    </html>
  );
}
