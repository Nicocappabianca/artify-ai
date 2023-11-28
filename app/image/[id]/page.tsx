import { getPageTitle, getPostById } from "@/utils/functions";
import Link from "next/link";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id);

  return {
    title: getPageTitle(post?.prompt || ""),
    description: post?.prompt || "",
  };
}

export default async function ImagePage({ params }: { params: { id: string } }) {
  return (
    <section className="pt-8 sm:pt-12 text-center">
      <h1 className="text-2xl font-bold">⚠️ Page in progress 👷🏼‍♂️</h1>
      <p className="py-2">We are currently working here</p>
      <Link className="font-semibold text-white" href="/">
        Go back to home page
      </Link>
    </section>
  );
}
