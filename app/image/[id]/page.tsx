import { getPageTitle, getPostById } from "@/utils/functions";
import { FullPost, NoPostFound } from "@/components";
import { getServerSession } from "next-auth";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id);

  return {
    title: getPageTitle(post?.prompt || ""),
    description: post?.prompt || "",
  };
}

export default async function ImagePage({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id);
  const session = await getServerSession();

  const isCurrentUserPost = post?.userEmail === session?.user?.email;

  return (
    <section className="pt-8 sm:pt-12 text-center">
      {post ? (
        <FullPost
          image={post.image}
          userImage={post.userImage}
          userName={post.userName}
          prompt={post.prompt}
          id={post.id}
          isCurrentUserPost={isCurrentUserPost}
        />
      ) : (
        <NoPostFound />
      )}
    </section>
  );
}
