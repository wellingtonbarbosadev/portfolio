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
    <section {...rest}>
      <header className={`${styles.sectionHeader}`}>
        <span className={`${styles.sectionTitleHeader} ${styles[titleColor]}`}>{titleHeader}</span>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </header>

      {children}
    </section>
  );
}
