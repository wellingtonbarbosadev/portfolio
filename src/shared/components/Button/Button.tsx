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
  
  function isInternalLink(link: string) {
    const url = new URL(link, window.location.origin);

    return url.origin === window.location.origin;
  }

  const internal = isInternalLink(link ?? window.location.origin);

  return (
    <a
      href={link}
      target={internal ? "_blank" : "_self"}
      className={`${styles.button} ${tipoBotao}`}
      rel={internal ? undefined : "noopener noreferrer"}
      {...rest}
    >
      {children}
    </a>
  );
}
