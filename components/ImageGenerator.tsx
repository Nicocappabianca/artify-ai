"use client";
import { useState } from "react";
import { PlayIcon } from "@/components/icons";
import { Button, LoadingSpinner } from "@/components";
import { useGenerateImage } from "@/hooks/useGenerateImage";
import Image from "next/image";

const ImageGenerator = () => {
  const { isLoading, imageUrl, imageFile, generateImage } = useGenerateImage();
  const [prompt, setPrompt] = useState("");

  const handlePromptSubmit = () => {
    if (prompt) {
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
          disabled={!prompt || isLoading}
        >
          <PlayIcon />
        </Button>
      </div>
      <div className="w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] max-w-full mx-auto mt-12 flex items-center justify-center rounded-md relative">
        {isLoading && (
          <div className="flex flex-col items-center">
            <LoadingSpinner />
            <p className="text-lg pt-4">We're creating your masterpiece... ✨</p>
          </div>
        )}
        {imageUrl && !isLoading && (
          <Image src={imageUrl} fill alt={`Image of ${prompt} generated by AI`} objectFit="cover" />
        )}
      </div>
    </>
  );
};

export default ImageGenerator;
