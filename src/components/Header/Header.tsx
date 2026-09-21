import GlassSurface from "../ReactBits/GlassSurface";
import "./Header.css";

export function Header() {
  return (
    <>
      <header>
        <GlassSurface width="100%" borderRadius={20} className="header">
          <h2>
            Wellington Barbosa <span>{"{}"}</span>
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
