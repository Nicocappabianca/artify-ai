"use client";
import { useState } from "react";
import { DownloadIcon, PlayIcon } from "@/components/icons";
import { Button, LoadingSpinner, ShareButton } from "@/components";
import { useGenerateImage, useUploadImage } from "@/hooks";
import { downloadImage } from "@/utils/functions/";
import { useSession } from "next-auth/react";
import Image from "next/image";

const ImageGenerator = () => {
  const { isLoading: isGeneratingImage, imageUrl, imageFile, generateImage } = useGenerateImage();
  const { uploadImage, status: uploadStatus, resetStatus: resetUploadStatus } = useUploadImage();
  const { data: session, status } = useSession();
  const [prompt, setPrompt] = useState("");

  const handlePromptSubmit = () => {
    if (prompt) {
      resetUploadStatus();
      generateImage(prompt);
    }
  };

  return (
    <>
      <div className="w-[50rem] max-w-full mx-auto relative">
        <textarea
          className="w-full min-h-[8rem] bg-transparent placeholder-slate-600 text-white border border-slate-400 rounded-md p-2 pr-14 no-scrollbar outline-none"
          placeholder="Enter your creative prompt here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <Button
          className="absolute bottom-4 right-3"
          onClick={handlePromptSubmit}
          disabled={!prompt || isGeneratingImage}
        >
          <PlayIcon />
        </Button>
      </div>
      <div
        className={`w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] max-w-full mx-auto mt-8 flex items-center justify-center rounded-md relative ${
          imageUrl ? "mb-20" : ""
        }`}
      >
        {isGeneratingImage && (
          <div className="flex flex-col items-center">
            <LoadingSpinner />
            <p className="text-lg pt-4">We're creating your masterpiece... ✨</p>
          </div>
        )}
        {imageUrl && !isGeneratingImage && (
          <>
            <Image
              src={imageUrl}
              fill
              alt="Image generated with AI"
              className="object-cover rounded-md"
            />
            <div className="flex space-x-3 font-semibold absolute -bottom-[50px]">
              <Button className="flex" onClick={() => downloadImage(imageUrl)}>
                <DownloadIcon className="mr-1" /> Download
              </Button>
              {imageFile && status === "authenticated" && (
                <ShareButton
                  onClick={() => uploadImage(imageFile, prompt, session)}
                  uploadStatus={uploadStatus}
                />
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ImageGenerator;
