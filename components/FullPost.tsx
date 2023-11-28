import { FC } from "react";

type FullPostProps = {
  image: string;
  userImage: string;
  userName: string;
  prompt: string;
  id: string;
};

const FullPost: FC<FullPostProps> = ({ image, userImage, userName, prompt, id }) => {
  return <div>FullPost</div>;
};

export default FullPost;
