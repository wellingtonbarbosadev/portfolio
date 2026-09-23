import AnimatedContent from "../ReactBits/AnimatedContent";
import styles from "./SectionContent.module.css";

type SectionContentProps = React.HTMLAttributes<HTMLElement> & {
  title: string;
  titleHeader: string;
  titleColor: "roxo" | "laranja" | "verde";
};

export function SectionContent({
  title,
  titleHeader,
  titleColor,
  children,
  ...rest
}: SectionContentProps) {
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
      className="sectionContent"
    >
      <section {...rest}>
        <header className={`${styles.sectionHeader}`}>
          <span
            className={`${styles.sectionTitleHeader} ${styles[titleColor]}`}
          >
            {titleHeader}
          </span>
          <h2 className={styles.sectionTitle}>{title}</h2>
        </header>

        {children}
      </section>
    </AnimatedContent>
  );
}
