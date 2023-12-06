import { STABLE_DIFFUSION_API } from "@/utils/constants";
import { useState } from "react";

const FILE_NAME = "artify-image.png";

type UseGenerateImageReturn = {
  isLoading: boolean;
  generateImage: (prompt: string) => void;
  imageUrl: string | null;
  imageFile: File | null;
  hasError: boolean;
};

const useGenerateImage = (): UseGenerateImageReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);

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
      .catch((_error) => setHasError(true))
      .finally(() => setIsLoading(false));
  };

  return {
    isLoading,
    generateImage,
    imageUrl,
    imageFile,
    hasError,
  };
};

export default useGenerateImage;
