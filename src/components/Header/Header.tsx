import GlassSurface from "../ReactBits/GlassSurface";
import "./Header.css";

const NOME = "Wellington Barbosa"

export function Header() {

  return (
    <>
      <header className="headerContainer">
        <GlassSurface width="100%" borderRadius={20} className="header">
          <h2>
            {NOME} <span>{"{}"}</span>
          </h2>

          <nav className="lowercase flex gap-4">
            <a href="#projetos">Projetos</a>
            <a href="#formacao">Formação</a>
            <a href="#certificados">Certificados</a>
            <a href="#contato">Contato</a>
          </nav>
          
        </GlassSurface>
      </header>
    </>
  );
}
