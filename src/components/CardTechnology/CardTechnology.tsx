import styles from "./CardTechnology.module.css"

export function CardTechnology() {
  return <section className={styles.tecnologiasCard}>
    <h3>title</h3>
    <p>descricao</p>

    <section className={styles.tecnologias}>
      <span>TypeScript</span>
      <span>React</span>
    </section>
  </section>
}