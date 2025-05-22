import React from "react";
import Card from "./card";
import "./galeria.css";


export default function Galeria({ personagens, onSelectPersonagem }) {
  return (
    <div className="galeria">
      {personagens.map((char) => (
        <Card
          key={p.id}
          nome={p.nome}
          imagem={p.imagem}
          onClick={() => onSelectPersonagem(char)}
        />
      ))}
    </div>
  );
}
