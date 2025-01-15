import React from 'react';
import { useRouter } from 'next/router';
import styles from './404.module.css';

function Home() {
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

export default Custom404;