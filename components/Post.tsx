import { FC } from "react";
import Image from "next/image";

type PostProps = {
  image: string;
  userImage: string;
  userName: string;
};

const Post: FC<PostProps> = ({ image, userImage, userName }) => {
  return (
    <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto group cursor-pointer">
      <Image
        src={image}
        layout="fill"
        alt={`image created by ${userName} with Artify`}
        className="rounded-lg"
      />
      <div className="absolute inset-0 bg-black/60 rounded-lg hidden group-hover:flex items-start justify-start p-4">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 relative">
            <Image
              className="rounded-full"
              src={userImage}
              layout="fill"
              alt={`${userName} avatar`}
            />
          </div>
          <p className="text-white font-semibold">{userName}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
