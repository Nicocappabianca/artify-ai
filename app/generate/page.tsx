import { getPageTitle } from "@/utils/metadata-functions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: getPageTitle("Generate"),
  description:
    "Unleash Your Creativity with AI-Powered Artistry. Create, Share, and Inspire with Stunning Images.",
};

export default function Home() {
  return (
    <section className="pt-8 sm:pt-12 text-center">
      <h1 className="text-lg sm:text-3xl font-bold">🖌️ Prompt Your Creativity with Artify 🎨 </h1>
      <p className="pt-3 text-md sm:text-lg max-w-xs sm:max-w-none mx-auto">
        Unleash Your Imagination and Create Art with AI-Powered Generation
      </p>
    </section>
  );
}
