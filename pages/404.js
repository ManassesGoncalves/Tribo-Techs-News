import styles from "./404.module.css";

function Erro404() {
  return (
    <div className={styles.error404}>
      <div className={styles.container}>
        <h1 className={styles.glitch}>404</h1>
        <h2 className={styles.glitch}>PÁGINA NÃO ENCONTRADA</h2>
        <p>Desculpe, mas a página que você está procurando não existe.</p>
        <button
          className={styles["btn-voltar"]}
          onClick={() => (window.location.href = "/")}
        >
          Voltar para a página inicial
        </button>
      </div>
    </div>
  );
}

export default Erro404;
