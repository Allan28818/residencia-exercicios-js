"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function TemaII() {
  
  const [texto, setTexto] = useState("");

  function changeP(event: React.ChangeEvent<HTMLInputElement>){
      setTexto(event.target.value);
  };

  return (
    <div className={styles.div}>
      <h1>Input:</h1>
      <input onChange={changeP} className={styles.input}></input>
      <h2>Paragrafo:</h2>
      <p className={styles.p}>{texto}</p>
    </div>

  );
}
