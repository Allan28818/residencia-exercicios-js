'use client';
import { useState } from 'react';
import styles from "../page.module.css"; // ajuste o caminho se necessário

export default function TemaI() {
  const [contador, setContador] = useState(1);

  function clicar() {
    setContador(1);
  }

  return (
    <div className={styles.page}>
      <p>Contador: {contador}</p>
      <button onClick={clicar}>Resetar contador para 1</button>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}
