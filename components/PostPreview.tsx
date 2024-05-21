"use client";
import { FC } from "react";
import { DownloadIcon } from "@/components/icons";
import { downloadImage, getBlobUrl } from "@/utils/functions";
import Image from "next/image";
import Link from "next/link";

type PostPreviewProps = {
  image: string;
  userImage: string;
  userName: string;
  prompt: string;
  id: string;
};

const PostPreview: FC<PostPreviewProps> = ({ image, userImage, userName, prompt, id }) => {
  const handleDownload = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const blobUrl = await getBlobUrl(image);
    blobUrl && downloadImage(blobUrl);
  };

  return (
    <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto group cursor-pointer">
      <Link href={`/image/${id}`}>
        <Image
          src={image}
          fill
          sizes="(max-width: 640px) 18rem, 24rem"
          alt={`image created by ${userName} with Artify`}
          className="rounded-lg bg-slate-400/25 animate-pulse"
          onLoad={(image) =>
            image.currentTarget.classList.remove("bg-slate-400/25", "animate-pulse")
          }
        />
        <div className="absolute inset-0 bg-black/60 rounded-lg hidden group-hover:flex flex-col items-start justify-between p-4">
          <div className="flex items-center w-full">
            <div className="w-10 h-10 relative">
              <Image
                className="rounded-full"
                src={userImage}
                fill
                sizes="2.5rem"
                alt={`${userName} avatar`}
              />
            </div>
            <p className="text-white font-semibold text-left ml-2 truncate max-w-[240px]">
              {userName}
            </p>
          </div>
          <p className="text-white text-sm truncate max-w-full">{prompt}</p>
        </div>
      </Link>
      <button
        onClick={handleDownload}
        className="absolute right-4 top-4 rounded-full hidden group-hover:block hover:bg-slate-400/30 p-2 transition"
      >
        <DownloadIcon className="text-white w-6 h-6" />
      </button>
    </div>
  );
};

export default PostPreview;
