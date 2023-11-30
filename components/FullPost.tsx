"use client";
import { FC } from "react";
import { Button, DeletedPost, LoadingSpinner } from "@/components";
import { DownloadIcon, TrashIcon } from "@/components/icons";
import { downloadImage } from "@/utils/functions";
import { DeleteStatus } from "@/hooks/useDeletePost";
import { useDeletePost } from "@/hooks";
import Image from "next/image";

type FullPostProps = {
  image: string;
  userImage: string;
  userName: string;
  prompt: string;
  id: string;
  isCurrentUserPost: boolean;
};

const FullPost: FC<FullPostProps> = ({
  image,
  userImage,
  userName,
  prompt,
  id,
  isCurrentUserPost,
}) => {
  const { deletePost, status: deleteStatus } = useDeletePost();

  const isDeletingPost = deleteStatus === DeleteStatus.LOADING;
  const postWasDeleted = deleteStatus === DeleteStatus.SUCCESS;

  if (postWasDeleted) {
    return <DeletedPost />;
  }

  return (
    <div className="flex flex-col mx-auto w-[300px] sm:w-[350px] lg:w-[500px] xl:w-[600px]">
      <div>
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 relative">
            <Image
              className="rounded-full"
              src={userImage}
              layout="fill"
              alt={`${userName} avatar`}
            />
          </div>
          <p className="text-white font-semibold text-left ml-2">{userName}</p>
        </div>
        <p className="text-left text-sm mb-3">{prompt}</p>
      </div>
      <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px]">
        <Image
          src={image}
          layout="fill"
          alt={`image created by ${userName} with Artify`}
          className="rounded-lg bg-slate-400/25 animate-pulse"
          onLoadingComplete={(image) => image.classList.remove("bg-slate-400/25", "animate-pulse")}
        />
      </div>
      <div className="flex mt-4 space-x-3">
        <Button onClick={() => downloadImage(image)} disabled={isDeletingPost}>
          <DownloadIcon className="w-8 h-8" />
        </Button>
        {isCurrentUserPost && (
          <Button
            onClick={() => deletePost(id)}
            className="bg-red-500 group hover:border-red-500"
            disabled={isDeletingPost}
          >
            {isDeletingPost ? (
              <LoadingSpinner className="w-8 h-8" />
            ) : (
              <TrashIcon className="w-8 h-8 group-hover:text-red-500" />
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

export default FullPost;
