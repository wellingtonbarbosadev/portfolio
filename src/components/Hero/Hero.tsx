import AnimatedContent from "../ReactBits/AnimatedContent";
import { DevCard } from "../DevCard/DevCard";

import "./Hero.css";
import { Button } from "../Button/Button";

import fotoPerfil from "../../assets/foto.jpeg";

export const githubLink = "https://github.com/wellingtonbarbosadev";

export function Hero() {
  const slogan =
    "Estudante de Engenharia de Software e de Programação Full Stack, com experiência prática em projetos web e APIs REST usando Java, Spring Boot, Node.js, TypeScript, Python, Flask, React, PostgreSQL e SQLite. Conhecimentos em autenticação, autorização, CRUD, ORM, Git e Docker. Busco estágio em desenvolvimento front-end, back-end ou full-stack.";
  return (
    <section>
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={0.8}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0}
        className="heroContent"
      >
        <div className="hero flex flex-col flex-2 gap-7">
          <DevCard />
          <p className="slogan">{slogan}</p>

          <section className="buttonsHero">
            <Button href="#projetos" type="primario">
              ver projetos
            </Button>
            <Button link={githubLink}>GitHub</Button>
          </section>
        </div>
        <div className="image flex flex-1 justify-center">
          <img src={fotoPerfil} alt="foto de perfil" />
        </div>
      </AnimatedContent>
    </section>
  );
}
