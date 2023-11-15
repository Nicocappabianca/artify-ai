import { FC } from "react";
import Image from "next/image";

type PostProps = {
  image: string;
  userImage: string;
  userName: string;
};

const Post: FC<PostProps> = ({ image, userImage, userName }) => {
  return (
    <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto">
      <Image
        src={image}
        layout="fill"
        alt={`image created by ${userName} with Artify`}
        className="rounded-lg"
      />
    </div>
  );
};

export default Post;
