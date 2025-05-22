import React from "react";
import "./card.css";

export default function Card({ nome, imagem, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={imagem} alt={nome} className="card-img" />
      <figcaption className="card-nome">{nome}</figcaption>
    </div>
  );
}
