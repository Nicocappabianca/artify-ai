import { PostsList } from "@/components";
import { NavLinks } from "@/utils/constants";
import { getPageTitle, getPosts } from "@/utils/functions";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: getPageTitle("My Gallery"),
  description:
    "Your personal gallery of creative wonders. Explore, organize, and enjoy your unique masterpieces with Artify.",
};

export default async function MyGalleryPage() {
  const session = await getServerSession();

  if (!session?.user) {
    redirect("/");
  }

  const posts = await getPosts({ fieldName: "userEmail", opStr: "==", value: session.user.email });

  return (
    <section className="pt-8 pb-8 sm:pt-12 text-center">
      {posts.length > 0 ? (
        <>
          <h1 className="text-lg text-white sm:text-3xl font-bold">🎨 Your Artistic Vault 🖼️</h1>
          <p className="pt-3 pb-8 sm:pb-12 text-md sm:text-lg max-w-xs sm:max-w-none mx-auto">
            Explore and manage your unique creations
          </p>
          <PostsList posts={posts} />
        </>
      ) : (
        <div>
          <h4 className="text-md sm:text-xl font-bold pt-12">Your Artistic Vault is Empty 😢</h4>
          <p className="pt-3 pb-8 text-sm sm:text-base">
            Let's fill your gallery with unique creations!
          </p>
          <Link
            className="bg-slate-900 rounded-md text-slate-400 border border-slate-400 py-2 px-2.5 hover:bg-slate-400 hover:text-slate-900 hover:border hover:border-slate-900 transition"
            href={NavLinks.GENERATE}
          >
            ✨ Create Your Masterpiece ✨
          </Link>
        </div>
      )}
    </section>
  );
}
