"use client";
import styles from "./page.module.css";
import {useState, useEffect} from "react";


export default function Home() {

  const [i, incrementar] = useState(0);

  useEffect(() => {

    window.alert("salve")

    // Limpar eventos ou recursos quando o componente for desmontado
    return () => {
      window.alert("salve pae, deu bom. mas agora vai rodar de novo depois do OK")
    };
  }, [i]);

  function clicar(){
    incrementar(i + 1);
  }
  
  function decrement(){
    incrementar(i-1);
  }

  return <div className={styles.div}>
    <button className={styles.button1} onClick={clicar}><p >{i}</p></button>
    <button className={styles.button2} onClick={decrement}><p >{i}</p></button>
  </div>;
}