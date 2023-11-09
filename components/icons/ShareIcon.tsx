import { FC } from "react";
import { IconProps } from "./types";

const ShareIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M20.94 13.045a9 9 0 1 0 -8.953 7.955"></path>
      <path d="M3.6 9h16.8"></path>
      <path d="M3.6 15h9.4"></path>
      <path d="M11.5 3a17 17 0 0 0 0 18"></path>
      <path d="M12.5 3a16.991 16.991 0 0 1 2.529 10.294"></path>
      <path d="M16 22l5 -5"></path>
      <path d="M21 21.5v-4.5h-4.5"></path>
    </svg>
  );
};

export default ShareIcon;
