import styles from "./Button.module.css";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  icone?: string;
  type?: "primario" | "secundario";
};

export function Button({
  children,
  icone,
  type = "secundario",
  ...rest
}: ButtonProps) {

  const tipoBotao = type === "primario" ? styles.primario : styles.secundario

  return (
    <button className={`${styles.button} ${tipoBotao}`} {...rest}>
      {children}
    </button>
  );
}
