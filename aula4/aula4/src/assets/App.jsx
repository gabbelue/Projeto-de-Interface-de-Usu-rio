
import './App.css'
import Props from '../componentes/Props'
import foto from './assets/nature.jpg'

function App() {
  let aluno = 'Gabriely'

  return (
    <>
      <Props nome={aluno} idade={"18"} foto={foto} descricao={"Natureza"}/>

      </>
  )
}

export default App
