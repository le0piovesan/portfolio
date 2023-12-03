import React, { useCallback, useLayoutEffect } from "react";
import Image from "next/image";
import { ModalProps } from "@/interfaces/ui/Modal.types";

const Modal: React.FC<ModalProps> = ({ setSelectedImage, selectedImage }) => {
  const escKeyBinding = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    },
    [setSelectedImage],
  );

  useLayoutEffect(() => {
    document.addEventListener("keydown", escKeyBinding, false);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", escKeyBinding, false);
      document.body.style.overflow = "auto";
    };
  }, [escKeyBinding]);

  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center overflow-hidden bg-black bg-opacity-75">
      <Image
        src={selectedImage.src}
        alt={selectedImage.alt}
        fill
        sizes="100vw"
        className="h-auto w-full cursor-pointer object-contain p-8"
        onClick={() => setSelectedImage(null)}
      />
      <button
        className="absolute right-2 top-4 rounded-md border p-2 text-white"
        onClick={() => setSelectedImage(null)}
      >
        ❌
      </button>
    </div>
  );
};

export default Modal;
