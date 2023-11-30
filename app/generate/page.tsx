import { ImageGenerator } from "@/components";
import { NavLinks } from "@/utils/constants";
import { getPageTitle } from "@/utils/functions";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: getPageTitle("Generate"),
  description:
    "Unleash Your Creativity with AI-Powered Artistry. Create, Share, and Inspire with Stunning Images.",
};

export default async function GeneratePage() {
  const session = await getServerSession();

  if (!session?.user) {
    redirect(NavLinks.HOME);
  }

  return (
    <section className="pt-8 sm:pt-12 text-center">
      <h1 className="text-lg text-white sm:text-3xl font-bold">
        🖌️ Prompt Your Creativity with Artify 🎨
      </h1>
      <p className="pt-3 pb-8 sm:pb-12 text-md sm:text-lg max-w-xs sm:max-w-none mx-auto">
        Unleash Your Imagination and Create Art with AI-Powered Generation
      </p>
      <ImageGenerator />
    </section>
  );
}
