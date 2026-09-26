import { useEffect } from "react";
import { usuario } from "../../shared/data";
import GlassSurface from "../ReactBits/GlassSurface";
import "./Header.css";

export function Header() {
  useEffect(() => {
    const navItens = document.querySelectorAll(".headerContainer nav a");

    const sections = document.querySelectorAll(
      "#containerProjetos, #containerFormacao, #containerCertificados, #containerContato",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          navItens.forEach((item) => item.classList.remove("active"));

          document
            .querySelector(`header a[href="#${entry.target.id}"]`)
            ?.classList.add("active");
        });
      },
      { threshold: 0.9, rootMargin: "-200px 0px 0px 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    
  }, []);

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
