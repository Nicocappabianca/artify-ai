"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressBarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar height="1.5px" color="#94A3B8" options={{ showSpinner: false }} />
    </>
  );
};

export default ProgressBarProvider;
