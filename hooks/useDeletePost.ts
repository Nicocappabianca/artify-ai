import { deletePost } from "@/utils/functions";
import { useState } from "react";

export enum DeleteStatus {
  READY,
  LOADING,
  SUCCESS,
  ERROR,
}

type useDeletePostReturn = {
  deletePost: (id: string) => Promise<void>;
  status: DeleteStatus;
};

const useDeletePost = (): useDeletePostReturn => {
  const [status, setStatus] = useState(DeleteStatus.READY);

  const handleDeletePost = async (id: string) => {
    setStatus(DeleteStatus.LOADING);

    try {
      await deletePost(id);
    } catch (error) {
      console.error("Error uploading image:", error);
      setStatus(DeleteStatus.ERROR);
    }

    setStatus(DeleteStatus.SUCCESS);
  };

  return {
    deletePost: handleDeletePost,
    status,
  };
};

export default useDeletePost;
