import { useState } from "react";
import { db, storage, POST_COLLECTION_NAME, IMAGES_FOLDER_NAME } from "@/utils/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { DefaultSession } from "next-auth";
import { v4 } from "uuid";

export enum UploadStatus {
  READY,
  LOADING,
  SUCCESS,
  ERROR,
}

type useUploadImageReturn = {
  uploadImage: (imageFile: File, prompt: string, session: DefaultSession) => Promise<void>;
  status: UploadStatus;
  resetStatus: () => void;
};

const useUploadImage = (): useUploadImageReturn => {
  const [status, setStatus] = useState(UploadStatus.READY);

  const uploadImage = async (imageFile: File, prompt: string, session: DefaultSession) => {
    setStatus(UploadStatus.LOADING);

    const postRef = collection(db, POST_COLLECTION_NAME);
    const imageRef = ref(storage, `${IMAGES_FOLDER_NAME}/${imageFile.name + v4()}`);

    try {
      await uploadBytes(imageRef, imageFile);

      const url = await getDownloadURL(imageRef);

      await addDoc(postRef, {
        prompt: prompt,
        image: url,
        userEmail: session.user?.email,
        userImage: session.user?.image,
        userName: session.user?.name,
      });
    } catch (error) {
      console.error("Error uploading image:", error);
      setStatus(UploadStatus.ERROR);
    }

    setStatus(UploadStatus.SUCCESS);
  };

  const resetStatus = () => setStatus(UploadStatus.READY);

  return {
    uploadImage,
    status,
    resetStatus,
  };
};

export default useUploadImage;
