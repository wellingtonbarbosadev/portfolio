import { type ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.css";

import { Button } from "../Button/Button";
import { XIcon } from "lucide-react";

type ModalProps = {
  title: string;
  open: boolean;
  close: () => void;
  children: ReactNode;
};

export function Modal({
  title,
  open,
  close,
  children,
}: ModalProps) {
  // useEffect(() => {
  //   if (!open) return;

  //   function handleKeyDown(event: KeyboardEvent) {
  //     if (event.key === "Escape") {
  //       close();
  //     }
  //   }

  //   document.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [open, close]);

  if (!open) return null;

  return createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <header className="flex justify-between">
          <h2>{title}</h2>

          <button onClick={close}>
            <XIcon size={24}/>
          </button>
        </header>

        {children}
      </div>
    </div>,
    document.body
  );
}