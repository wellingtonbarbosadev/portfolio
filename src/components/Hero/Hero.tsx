import AnimatedContent from "../ReactBits/AnimatedContent";
import { DevCard } from "../DevCard/DevCard";

import "./Hero.css";
import { Button } from "../Button/Button";

import fotoPerfil from "../../assets/foto.jpeg";

export const githubLink = "https://github.com/wellingtonbarbosadev";

export function Hero() {
  const slogan =
    "Sou estudante de Engenharia de Software e busco minha primeira oportunidade de estágio em Desenvolvimento Web. Venho desenvolvendo projetos próprios voltados para Back-end e APIs REST, utilizando tecnologias como Node.js, TypeScript, Express, React, Prisma ORM, PostgreSQL, Java e Spring Boot. Entre os projetos que desenvolvi estão sistemas com autenticação JWT, controle de permissões, gerenciamento de tarefas, pedidos e estoque, sempre aplicando boas práticas de organização, validação e integração com banco de dados. Tenho facilidade para aprender novas tecnologias, gosto de resolver problemas e estou constantemente estudando e evoluindo por meio de cursos e projetos práticos. Acredito que posso contribuir com dedicação, aprendizado rápido, trabalho em equipe e vontade de crescer profissionalmente, ajudando a empresa no desenvolvimento de soluções e na evolução dos projetos da equipe."
  return (
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
  );
}
