import { FC } from "react";
import Post from "@/components/Post";
import { Post as PostType } from "@/types";

type PostsListProps = {
  posts: PostType[];
};

const PostsList: FC<PostsListProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 w-fit mx-auto">
      {posts.map((post) => {
        const { id, image, userName, userImage, prompt } = post;
        return image ? (
          <Post key={id} image={image} userName={userName} userImage={userImage} prompt={prompt} />
        ) : null;
      })}
    </div>
  );
};

export default PostsList;
