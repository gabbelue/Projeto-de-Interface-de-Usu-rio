import React, { useState } from "react";
import Card from "./card";
import Detalhes from "./detalhes";
import "./galeria.css";

export default function Galeria({ personagens }) {
  const [temaDark, setTemaDark] = useState("light");
  const [personagemSelecionado, setPersonagemSelecionado] = useState(null);


  const handleSelectPersonagem = (personagem) => {
    setPersonagemSelecionado(personagem);
  };

  return (
    <div className="galeria">
      {personagens.map((char) => (
        <Card
          key={char.id}
          nome={char.nome}
          imagem={char.imagem}
          onClick={() => handleSelectPersonagem(p)}
        />
      ))}

      <Detalhes personagem={personagemSelecionado} />
    </div>
  );
}
