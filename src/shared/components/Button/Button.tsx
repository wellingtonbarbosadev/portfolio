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
  const tipoBotao =
    type === "primario"
      ? styles.primario
      : styles.secundario;

  const url = link || href || "/";

  function isInternalLink(link: string) {
    // Links relativos são internos
    if (link.startsWith("/") || link.startsWith("#")) {
      return true;
    }

    try {
      const url = new URL(link);

      return url.origin === window.location.origin;
    } catch {
      return false;
    }
  }

  const internal = isInternalLink(url);

  return (
    <a
      href={url}
      target={internal ? "_self" : "_blank"}
      className={`${styles.button} ${tipoBotao}`}
      rel={internal ? undefined : "noopener noreferrer"}
      {...rest}
    >
      {children}
    </a>
  );
}