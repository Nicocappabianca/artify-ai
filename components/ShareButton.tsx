"use client";
import { FC } from "react";
import { Button, LoadingSpinner } from "@/components";
import { ShareIcon, CircleCheckIcon, ExclamationIcon } from "@/components/icons";
import { UploadStatus } from "@/hooks/useUploadImage";

type ShareButtonProps = {
  uploadStatus: UploadStatus;
  onClick: () => void;
};

const ShareButton: FC<ShareButtonProps> = ({ uploadStatus, onClick }) => {
  return (
    <Button
      disabled={uploadStatus !== UploadStatus.READY}
      className={`flex items-center transition-all ${
        uploadStatus === UploadStatus.SUCCESS ? "!bg-green-400" : ""
      } ${uploadStatus === UploadStatus.ERROR ? "!bg-red-500 !text-slate-50" : ""}`}
      onClick={onClick}
    >
      {uploadStatus === UploadStatus.READY && (
        <>
          <ShareIcon className="mr-1" />
          Share with Artify
        </>
      )}
      {uploadStatus === UploadStatus.LOADING && (
        <>
          <LoadingSpinner className="w-5 h-5 mr-2" />
          Uploading...
        </>
      )}
      {uploadStatus === UploadStatus.SUCCESS && (
        <>
          <CircleCheckIcon className="mr-1" />
          Uploaded!
        </>
      )}
      {uploadStatus === UploadStatus.ERROR && (
        <>
          <ExclamationIcon className="mr-1" />
          Upload Error
        </>
      )}
    </Button>
  );
};

export default ShareButton;
