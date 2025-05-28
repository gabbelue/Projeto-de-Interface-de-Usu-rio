import React, { useState } from "react";
import Galeria from "./components/galeria.jsx";
import Detalhes from "./detalhes";
import './App.css';

import p1 from "./assets/personagem1.jpg";
import p2 from "./assets/personagem2.jpg";
import p3 from "./assets/personagem3.jpg";
import p4 from "./assets/personagem4.jpg";
import p5 from "./assets/personagem5.jpg";
import p6 from "./assets/personagem6.jpg";

const personagens = [
  {
    id: 1,
    nome: "Mulan",
    descricao: "Princesa guerreira da china",
    imagem: p1,
  },
  {
    id: 2,
    nome: "Cinderela",
    descricao: "Princesa do sapatinho de cristal.",
    imagem: p2,
  },
  {
    id: 3,
    nome: "Rapunzel",
    descricao: "Princesa dos cabelos longos.",
    imagem: p3,
  },
  {
    id: 4,
    nome: "Branca de neve",
    descricao: "Princesa dos 7 anões.",
    imagem: p4,
  },
  {
    id: 5,
    nome: "Tiana",
    descricao: "Princesa que vira um sapo.",
    imagem: p5,
  },
  {
    id: 6,
    nome: "Ariel",
    descricao: "Princesa sereia.",
    imagem: p6,
  },
];

export default function App() {
  const [temaDark, setTemaDark] = useState('light');
  const [personagemSelecionado, setPersonagemSelecionado] = useState(null);

  function toggleTema() {
    setTemaDark(!temaDark);
  }

  function handleSelectPersonagem(personagem) {
    setPersonagemSelecionado(personagem);
  }

  return (
    <div className={`app ${temaDark ? "dark" : "light"}`}>
      <header>
        <button onClick={toggleTema}> Alternar tema {temaDark ? "Light Mode" : "Dark Mode"}
        </button>
        <h1>Galeria de Personagens</h1>
      </header>

      <Galeria personagens={personagens} handleSelectPersonagem={handleSelectPersonagem} />
      <Detalhes personagem={personagemSelecionado} />
    </div>
  );
}
