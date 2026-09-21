import { githubLink } from "../Hero/Hero";
import styles from "./Button.module.css";

type ButtonProps = React.HTMLAttributes<HTMLAnchorElement> & {
  icone?: string;
  type?: "primario" | "secundario";
  link?: string;
  href?: string;
};

export function Button({
  children,
  icone,
  type = "secundario",
  link,
  href,
  ...rest
}: ButtonProps) {
  const tipoBotao = type === "primario" ? styles.primario : styles.secundario;

  return (
    <a
      href={link}
      target={link === githubLink ? "_blank" : "_self"}
      className={`${styles.button} ${tipoBotao}`}
      {...rest}
    >
      {children}
    </a>
  );
}
