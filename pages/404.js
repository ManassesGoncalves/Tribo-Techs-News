import React from 'react';
import { useRouter } from 'next/router';
import styles from './404.module.css';

function Custom404() {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404 - Página Não Encontrada</h1>
            <p className={styles.description}>
                Desculpe, a página que você está procurando não existe.
            </p>
            <button className={styles.button} onClick={() => router.push('/')}>
                Voltar para a Home
            </button>
        </div>
    );
}

export default Custom404;