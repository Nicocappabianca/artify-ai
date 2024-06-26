import { Header } from "@/components";
import { getServerSession } from "next-auth";
import { ProgressBarProvider, SessionProvider } from "@/components/providers";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={`${quicksand.className} bg-slate-900 text-slate-400`}>
        <Header />
        <SessionProvider session={session}>
          <ProgressBarProvider>
            <main className="container mx-auto pt-16 px-5 md:px-0 ">{children}</main>
          </ProgressBarProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
