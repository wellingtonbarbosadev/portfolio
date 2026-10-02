import { useState } from "react";
import { Modal } from "../../shared/components/Modal/Modal";
import styles from "./CardTechnology.module.css";

import { MoveUpRight } from "lucide-react";

type CardTechnologyProps = {
  title: string;
  descricaoCurta?: string;
  descricao: string;
  tecnologias: string[];
  imagens?: string[];
  linkDemo?: string;
  linkRepositorio: string;
};

export function CardTechnology({
  title,
  descricaoCurta,
  descricao,
  tecnologias,
  imagens,
  linkDemo,
  linkRepositorio,
}: CardTechnologyProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section
        onClick={() => setIsOpen(true)}
        className={`${styles.tecnologiasCard} card`}
      >
        <MoveUpRight size={16} />
        <h3>{title}</h3>
        <p>{descricaoCurta || descricao}</p>

        <section className={styles.tecnologias}>
          {tecnologias.map((tecnologia) => (
            <span key={tecnologia}>{tecnologia}</span>
          ))}
        </section>
      </section>

      {isOpen && (
        <Modal
          title={title}
          open={isOpen}
          close={() => setIsOpen(false)}
          descricao={descricao}
          tecnologias={tecnologias}
          imagens={imagens ?? []}
          linkDemo={linkDemo ?? ""}
          linkRepositorio={linkRepositorio}
        />
      )}
    </>
  );
}
