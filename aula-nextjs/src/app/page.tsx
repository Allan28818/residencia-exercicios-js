"use client";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function Home() {

const [nome, setNome] = useState("");

function filtroNaruto(evento: any) {

  console.log(evento.target.value)

  if(evento.target.value.toLowerCase() === 'naruto'){
    alert("dattebayo!")
    return;
  }
}

  return (
    <input type="text"  placeholder="Digite o valor: "  id="pop" onChange={filtroNaruto} className={styles.page}></input>
  );
}
