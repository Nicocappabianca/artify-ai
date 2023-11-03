"use client";
import { useState } from "react";
import { PlayIcon } from "@/components/icons";
import { LoadingSpinner } from "@/components";
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
        <button
          onClick={handlePromptSubmit}
          disabled={!prompt}
          className="absolute bottom-4 right-3 bg-slate-400 rounded-md text-slate-900 border border-slate-900 py-1 px-1.5 hover:bg-slate-900 hover:text-slate-400 hover:border hover:border-slate-400 transition active:scale-95 disabled:opacity-40 disabled:pointer-events-none"
        >
          <PlayIcon />
        </button>
      </div>
      <div className="w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] mx-auto mt-12 flex items-center justify-center rounded-md relative">
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
