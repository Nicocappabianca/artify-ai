import { FC, ReactNode } from "react";
import { CloseIcon } from "./icons";

type ModalPosition = "left" | "right" | "center";

const modalPositionClass: Record<ModalPosition, string> = {
  center: "mx-auto",
  left: "mr-auto",
  right: "ml-auto",
};

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children?: ReactNode;
  position?: ModalPosition;
}

const Modal: FC<ModalProps> = ({ isOpen, closeModal, children, position }) => {
  return (
    <div
      className={`fixed inset-0 z-50 w-screen h-screen p-5 bg-black/20 backdrop-blur-sm ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div
        className={`relative w-fit rounded-lg shadow bg-slate-800 pr-10 pl-4 pt-6 pb-4 ${
          position && modalPositionClass[position]
        }`}
      >
        <button className="absolute right-2 top-2" onClick={closeModal}>
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
