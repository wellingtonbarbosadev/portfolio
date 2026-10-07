import { createPortal } from "react-dom";

import styles from "./Modal.module.css";

import { Button } from "../Button/Button";
import { XIcon } from "lucide-react";
import type { ProjetoType } from "../../data";
import FlexCarousel from "../../../components/ReactBits/FlexCarousel";

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
  // tecnologias,
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
        
        {imagens && imagens.length > 0 && (
          <div className={styles.containerCarousel}>
            <FlexCarousel
              items={imagens.map((img, idx) => ({
                src: img,
                alt: `${title} - Imagem ${idx + 1}`,
                title: `${title} (${idx + 1}/${imagens.length})`,
              }))}
              className={styles.carousel}
              gap={20}
              cardHeight={1}
              radius={14}
              fit="landscape"
              autoplay={true}
              bend={0}
            ></FlexCarousel>
          </div>
        )}

        <p>{descricao}</p>

        <section className="buttons">
          {linkDemo ? (
            <Button type="primario" link={linkDemo}>
              Demo
            </Button>
          ) : null}
          {linkRepositorio ? (
            <Button link={linkRepositorio}>Repositório</Button>
          ) : null}
        </section>
      </div>
    </div>,
    document.body,
  );
}
