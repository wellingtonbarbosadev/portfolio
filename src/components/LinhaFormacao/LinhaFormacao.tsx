import styles from "./LinhaFormacao.module.css";

type FormacaoType = {
  periodo: string;

  instituicao: {
    nome: string;
    detalhes: string;
  };
};

export function LinhaFormacao(formacao: FormacaoType) {
  return (
    <section className={`${styles.linha} flex w-full h-full border-t border-t-gray-800 py-4`}>
      <span className="flex-1">{formacao.periodo}</span>

      <section className="flex-3">
        <strong>{formacao.instituicao.nome}</strong>
        <p>{formacao.instituicao.detalhes}</p>
      </section>
    </section>
  );
}
