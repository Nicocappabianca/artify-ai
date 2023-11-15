import { collection, getDocs } from "firebase/firestore";
import { db, POST_COLLECTION_NAME } from "@/utils/firebase-config";
import { getPageTitle } from "@/utils/functions";
import { PostsList } from "@/components";
import { Post } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: getPageTitle(),
  description:
    "Unleash Your Creativity with AI-Powered Artistry. Create, Share, and Inspire with Stunning Images.",
};

export default async function Home() {
  const postRef = collection(db, POST_COLLECTION_NAME);
  const data = await getDocs(postRef);
  const posts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[];

  return (
    <section className="pt-8 sm:pt-12 text-center">
      <h1 className="text-lg text-white sm:text-3xl font-bold">
        🎨 Artify Hub: Create, Share, Inspire 🚀
      </h1>
      <p className="pt-3 pb-16 sm:pb-20 text-md sm:text-lg max-w-xs sm:max-w-3xl mx-auto">
        Dive into our community's unique blend of inspiration and AI artistry
      </p>
      {posts.length > 1 && <PostsList posts={posts} />}
    </section>
  );
}
