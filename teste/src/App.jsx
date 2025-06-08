import { useState } from 'react';
import Card from './Componentes/Card';
import Detalhes from './Componentes/Detalhes';
import Tema from './Componentes/Tema';
import Galeria from './Componentes/Galeria';
import './App.css';

import person1 from './assets/aurora.png';
import person2 from './assets/mulan.png';
import person3 from './assets/ariel.png';
import person4 from './assets/cinderela.png';
import person5 from './assets/branca-de-neve.png';
import person6 from './assets/tiana.png';


//array de objetos para armazenar as informações necessárias sobre cada personagem como nome , a sua descrição e o seu arquivo de imagem (todos importados aqui mesmo em App).
const characters = [
  {
    id: 1,
    name: 'Aurora',
    description: 'A princesa que é uma bela adormecida.',
    image: person1
  },
  {
    id: 2,
    name: 'Mulan',
    description: 'A princesa heroína da china.',
    image: person2
  },
   {
    id: 3,
    name: 'Ariel',
    description: 'A princesa do fundo do mar.',
    image: person3
  },
  {
    id: 4,
    name: 'Cinderela',
    description: 'A princesa do sapatinho de cristal.',
    image: person4
  },
   {
    id: 5,
    name: 'Branca de Neve',
    description: 'A princesa dos 7 anões.',
    image: person5
  },
  {
    id: 6,
    name: 'Tiana',
    description: 'A princesa que beija o sapo.',
    image: person6
  }

];

export default function App() {


  return (
    <Tema>

      <h1>Galeria de Personagens</h1>
      {/* O componente Galeria aqui está sendo passado como children para o componenete Tema. Galeria recebe por props o array de objetos com as informações dos personagens */}
      <Galeria characters={characters}/>
    </Tema>
  );
}