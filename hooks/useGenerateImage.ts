import { STABLE_DIFFUSION_API } from "@/utils/constants";
import { useState } from "react";

const FILE_NAME = "artify-image.png";

interface useGenerateImageReturn {
  isLoading: boolean;
  generateImage: (prompt: string) => void;
  imageUrl: string | null;
  imageFile: File | null;
}

export const useGenerateImage = (): useGenerateImageReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const generateImage = (prompt: string) => {
    setIsLoading(true);
    setImageUrl(null);
    setImageFile(null);

    fetch(STABLE_DIFFUSION_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUGGING_FACE_TOKEN}`,
      },
      body: JSON.stringify({ inputs: prompt }),
    })
      .then((response) => response.blob())
      .then((blob) => {
        setImageUrl(URL.createObjectURL(blob));
        setImageFile(new File([blob], FILE_NAME, { type: "image/png" }));
      })
      .finally(() => setIsLoading(false));
  };

  return {
    isLoading,
    generateImage,
    imageUrl,
    imageFile,
  };
};