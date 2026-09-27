import { useEffect } from "react";
import { usuario } from "../../shared/data";
import GlassSurface from "../ReactBits/GlassSurface";
import "./Header.css";

export function Header() {
  useEffect(() => {
    const navItens = document.querySelectorAll(".headerContainer nav a");

    const sections = document.querySelectorAll(
      "#projetos, #formacao, #certificados, #contato",
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
      { threshold: 0.3, rootMargin: "-200px 0px 0px 0px" },
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
