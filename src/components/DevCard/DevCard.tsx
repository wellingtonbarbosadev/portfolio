import "./DevCard.css";

type Linha = { chave: string; valor: string };

export function DevCard() {
  const LINHAS: Linha[] = [
    {
      chave: "nome",
      valor: "Wellington Barbosa",
    },
    {
      chave: "cargo",
      valor: "Desenvolvedor FullStack",
    },
    {
      chave: "local",
      valor: "Rio da Janeiro, RJ",
    },
    {
      chave: "status",
      valor: "open_to_work",
    },
  ];

  return (
    <section className="devCard block">
      <header className="devCard flex w-full">
        <div className="redLight"></div>
        <div className="yellowLight"></div>
        <div className="greenLight"></div>
      </header>

      <main id="devCardContainer">
        <div className="devCardContent">
          <span className="text-(--purple)">const</span>{" "}
          <span className="text-gray-300">dev</span> = <span>{"{"}</span>
          <section className="devCardContent_info">
            {LINHAS.map((linha, index) => (
              <p className="linha" key={linha.chave}>
                {linha.chave}
                <span className="divisor">:</span>{" "}
                <span>
                  {linha.valor}
                  {LINHAS[index + 1] && <span className="virgula">,</span>}
                </span>
              </p>
            ))}
          </section>
          <span>{"}"}</span>
        </div>
      </main>
    </section>
  );
}
