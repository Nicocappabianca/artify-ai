"use client";
import { FC } from "react";
import { DownloadIcon } from "@/components/icons";
import Image from "next/image";

type PostProps = {
  image: string;
  userImage: string;
  userName: string;
  prompt: string;
};

const Post: FC<PostProps> = ({ image, userImage, userName, prompt }) => {
  return (
    <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto group cursor-pointer">
      <Image
        src={image}
        layout="fill"
        alt={`image created by ${userName} with Artify`}
        className="rounded-lg bg-slate-400/25 animate-pulse"
        onLoadingComplete={(image) => image.classList.remove("bg-slate-400/25", "animate-pulse")}
      />
      <div className="absolute inset-0 bg-black/60 rounded-lg hidden [@media(hover:hover)]:group-hover:flex flex-col items-start justify-between p-4">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <div className="w-10 h-10 relative">
              <Image
                className="rounded-full"
                src={userImage}
                layout="fill"
                alt={`${userName} avatar`}
              />
            </div>
            <p className="text-white font-semibold text-left ml-2 ">{userName}</p>
          </div>
          <button className="rounded-full hover:bg-slate-400/30 p-2 transition">
            <DownloadIcon className="text-white w-6 h-6" />
          </button>
        </div>
        <p className="text-white text-sm truncate max-w-full">{prompt}</p>
      </div>
    </div>
  );
};

export default Post;
