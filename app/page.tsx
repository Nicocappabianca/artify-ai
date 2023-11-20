import { getPageTitle, getPosts } from "@/utils/functions";
import { PostsList, SignInButton } from "@/components";
import { NavLinks } from "@/utils/constants";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Link from "next/link";

export const metadata: Metadata = {
  title: getPageTitle(),
  description:
    "Unleash Your Creativity with AI-Powered Artistry. Create, Share, and Inspire with Stunning Images.",
};

export default async function Home() {
  const posts = await getPosts();
  const session = await getServerSession();

  return (
    <section className="pt-8 pb-8 sm:pt-12 text-center">
      <h1 className="text-lg text-white sm:text-3xl font-bold">
        🎨 Artify Hub: Create, Share, Inspire 🚀
      </h1>
      <p className="pt-3 pb-16 sm:pb-20 text-md sm:text-lg max-w-xs sm:max-w-3xl mx-auto">
        Dive into our community's unique blend of inspiration and AI artistry
      </p>
      {posts.length > 0 ? (
        <PostsList posts={posts} />
      ) : (
        <div>
          <h4 className="text-md sm:text-xl font-bold pt-12">
            Nobody Published Their Masterpieces Yet 😢
          </h4>
          <p className="pt-3 pb-8 text-sm sm:text-base">
            Be the first! Create a masterpiece and share it with the Artify community
          </p>
          {session?.user ? (
            <Link
              className="bg-slate-900 rounded-md text-slate-400 border border-slate-400 py-2 px-2.5 hover:bg-slate-400 hover:text-slate-900 hover:border hover:border-slate-900 transition"
              href={NavLinks.GENERATE}
            >
              ✨ Let's Generate Art! ✨
            </Link>
          ) : (
            <SignInButton />
          )}
        </div>
      )}
    </section>
  );
}
