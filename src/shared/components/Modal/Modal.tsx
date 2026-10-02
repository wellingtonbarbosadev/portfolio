import { type ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.css";

import { Button } from "../Button/Button";
import { XIcon } from "lucide-react";
import type { ProjetoType } from "../../data";

type ModalProps = ProjetoType & {
  title: string;
  open: boolean;
  close: () => void;
};

export function Modal({
  title,
  open,
  close,
  descricao,
  tecnologias,
  imagens,
  linkDemo,
  linkRepositorio,
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
        <header>
          <h2>{title}</h2>

          <button onClick={close}>
            <XIcon size={24} />
          </button>
        </header>

        <p>{descricao}</p>

        <section className="buttons">
          <Button type="primario" link={linkDemo}>Demo</Button>
          <Button link={linkRepositorio}>Repositório</Button>
        </section>
      </div>
    </div>,
    document.body,
  );
}
