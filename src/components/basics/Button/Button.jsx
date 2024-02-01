import styles from "./Button.module.scss";

const Button = ({ children, onClick, style = {}, disable }) => {
  return (
    <button
      disabled={disable}
      className={styles.button}
      onClick={onClick}
      style={{ ...style }}
    >
      {children}
    </button>
  );
};

export default Button;
