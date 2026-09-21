import AnimatedContent from "../ReactBits/AnimatedContent";
import { DevCard } from "../DevCard/DevCard";

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
    >
      <div className="flex flex-col gap-7">
        <DevCard />
        <p className="slogan">{slogan}</p>

        <section>
          <button>ver projetos</button>
          <button>GitHub</button>
        </section>
      </div>
      <div className="image"></div>
    </AnimatedContent>
  );
}
