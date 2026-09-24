import type { CertificadoType } from "../../shared/data";
import styles from "./CardCertificado.module.css";

export function CardCertificado({ imagem, nome, detalhes, link }: CertificadoType) {
  return (
    <a href={link} target="_blank" className={`${styles.cardCertificado} card`}>
      <img src={imagem} alt="" />

      <section>
        <h4>{nome}</h4>
        <p title={detalhes}>{detalhes.length > 100 ? detalhes.slice(0, 100 - 3) + "..." : detalhes}</p>
      </section>
    </a>
  );
}
