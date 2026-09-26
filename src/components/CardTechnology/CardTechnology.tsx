import styles from "./CardTechnology.module.css";

import { MoveUpRight } from "lucide-react";

type CardTechnologyProps = {
  title: string;
  descricao: string;
  tecnologias: string[];
};

export function CardTechnology({
  title,
  descricao,
  tecnologias,
}: CardTechnologyProps) {
  return (
    <section className={`${styles.tecnologiasCard} card`}>
      <MoveUpRight size={16} />
      <h3>{title}</h3>
      <p>{descricao}</p>

      <section className={styles.tecnologias}>
        {tecnologias.map((tecnologia) => (
          <span key={tecnologia}>{tecnologia}</span>
        ))}
      </section>
    </section>
  );
}
