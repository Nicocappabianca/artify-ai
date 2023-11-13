import { getPageTitle } from "@/utils/functions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: getPageTitle(),
  description:
    "Unleash Your Creativity with AI-Powered Artistry. Create, Share, and Inspire with Stunning Images.",
};

export default function Home() {
  return <section>Home</section>;
}
