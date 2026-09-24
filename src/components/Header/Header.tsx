import { usuario } from "../../shared/data";
import GlassSurface from "../ReactBits/GlassSurface";
import "./Header.css";

export function Header() {

  return (
    <>
      <header className="headerContainer">
        <GlassSurface width="100%" borderRadius={20} className="header">
          <h2>
            {usuario.nome} <span>{"{}"}</span>
          </h2>

          <nav className="lowercase flex gap-4">
            <a href="#containerProjetos">Projetos</a>
            <a href="#containerFormacao">Formação</a>
            <a href="#containerCertificados">Certificados</a>
            <a href="#containerContato">Contato</a>
          </nav>
          
        </GlassSurface>
      </header>
    </>
  );
}
