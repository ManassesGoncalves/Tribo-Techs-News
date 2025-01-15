import React from 'react';
import styles from './404.module.css';

function erro404() {
  return (
    <div className={styles.error404}>
      <div className={styles.container}>
        <h1>404</h1>
        <h2>Página não encontrada</h2>
        <p>Desculpe, mas a página que você está procurando não existe.</p>
        <button className={styles['btn-voltar']} onClick={() => window.location.href = '/'}>
          Voltar para a página inicial
        </button>
      </div>
    </div>
  );
}

export default erro404;