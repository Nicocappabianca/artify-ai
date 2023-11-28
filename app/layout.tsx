import { Header } from "@/components";
import { getServerSession } from "next-auth";
import { SessionProvider } from "@/components/providers";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={`${quicksand.className} bg-slate-900 text-slate-400`}>
        <Header />
        <SessionProvider session={session}>
          <main className="container mx-auto pt-16 px-5 md:px-0 ">{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
