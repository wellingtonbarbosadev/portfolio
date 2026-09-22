import AnimatedContent from "../ReactBits/AnimatedContent";
import { DevCard } from "../DevCard/DevCard";

import "./Hero.css";
import { Button } from "../Button/Button";

import fotoPerfil from "../../assets/foto.jpeg";

export const githubLink = "https://github.com/wellingtonbarbosadev";

export function Hero() {
  const slogan =
    "Cursando Engenharia de Software na UVA. Transito entre front-end e back-end — Java, Spring Boot, Express, React — e gosto de projeto que dá trabalho de resolver.";

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
