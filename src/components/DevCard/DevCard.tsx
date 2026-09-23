import { useEffect, useState } from "react";
import "./DevCard.css";
import { LINHAS } from "../../shared/data";



export function DevCard() {
  
  const [nome, setNome] = useState("");

  useEffect(() => {
    const linhaNome = LINHAS.find((linha) => linha.chave === "nome");
    if (!linhaNome) return;

    const nomeSeparado = linhaNome.valor.split("");
    let index = 0;

    let intervalId: ReturnType<typeof setInterval>;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        if (index < nomeSeparado.length) {
          const letra = nomeSeparado[index];
          setNome((prev) => prev + letra);

          index++;
        } else {
          clearInterval(intervalId);
          clearTimeout(timeoutId);
        }
      }, 80);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

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
              <p className={`linha ${linha.chave}`} key={linha.chave}>
                {linha.chave}
                <span className="divisor">:</span>{" "}
                <span>{linha.chave === "nome" ? nome : linha.valor}</span>
                {LINHAS[index + 1] && <span className="virgula">,</span>}
              </p>
            ))}
          </section>
          <span>{"}"}</span>
        </div>
      </main>
    </section>
  );
}
