import { useState } from "react";

import GlassSurface from "../ReactBits/GlassSurface";
import "./Header.css";

export function Header() {
  const [nome] = useState("Wellington Barbosa")

  return (
    <>
      <header className="headerContainer">
        <GlassSurface width="100%" borderRadius={20} className="header">
          <h2>
            {nome} <span>{"{}"}</span>
          </h2>

          <section className="lowercase flex gap-4">
            <a href="#projetos">Projetos</a>
            <a href="#formacao">Formação</a>
            <a href="#certificados">Certificados</a>
            <a href="#contato">Contato</a>
          </section>
        </GlassSurface>
      </header>
    </>
  );
}
