import type { CertificadoType } from "../../shared/data";
import styles from "./CardCertificado.module.css";

export function CardCertificado({
  imagem,
  nome,
  detalhes,
  link,
}: CertificadoType) {
  return (
    <a href={link} target="_blank" className={`${styles.cardCertificado} cardCertificado  card`}>
      <div className={`${styles.imageWrapper} imageWrapper`}>
        <img src={imagem} alt="" />
      </div>

      <section>
        <h4>{nome}</h4>
        <p title={detalhes}>
          {detalhes.length > 100
            ? detalhes.slice(0, 100 - 3) + "..."
            : detalhes}
        </p>
      </section>
    </a>
  );
}
