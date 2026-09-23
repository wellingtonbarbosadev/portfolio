import styles from "./CardTechnology.module.css";

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
    <section className={styles.tecnologiasCard}>
      <h3>{title}</h3>
      <p>{descricao}</p>

      <section className={styles.tecnologias}>
        {tecnologias.map((tecnologia) => (
          <span>{tecnologia}</span>
        ))}
      </section>
    </section>
  );
}
