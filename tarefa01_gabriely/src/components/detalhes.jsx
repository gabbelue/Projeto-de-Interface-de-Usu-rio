import React from "react";
import "./detalhes.css";

export default function Detalhes({ personagem }) {
  if (!personagem) return null;

  return (
    <div className="detalhes">
      <h2>{personagem.nome}</h2>
      <img src={personagem.imagem} alt={personagem.nome} className="detalhes-img" />
      <p>{personagem.descricao}</p>
    </div>
  );
}
