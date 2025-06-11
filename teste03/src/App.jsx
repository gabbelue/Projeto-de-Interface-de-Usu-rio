import './App.css'
import ListasMap from './Components/ListasMap'
import ListasFilter from './Components/ListasFilter'
import ListasObj from './Components/ListasObj'
import Dropdown from './Components/Dropdown'

function App() {

  const links=['Link1','Link2','Link3','Link4', 'Link5'];
  const titulos=['Menu1','Menu2','Menu3','Menu4', 'Menu5'];
  
  return (
    <>
     {/* <ListasMap />
     <br />
     <ListasFilter/>
     <br />
     <ListasObj/>
     <br /> */}
     <Dropdown titulos={titulos} links={links}/>
    </>
  )
}

export default App
