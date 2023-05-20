import React, {useState} from 'react'
import Agenda from './components/Agenda'
import Home from './components/Home'
import Header from './template/Header'
import Footer from './template/Footer'
import './App.css';

function App() {

  //Adicionar os inputs dentro de uma lista de strings, em seguida usar map para renderiza-lo
  //Fazer paginação

  const [showHome, setShowHome] = useState(true)
  const [showAgenda, setShowAgenda] = useState(false)

  const handleShowAgenda = () => {
    setShowHome(false)
    setShowAgenda(true)
  }

  return (
    <div className='app'>
      <Header></Header>
      {showHome && <Home showAgenda={handleShowAgenda}/>}
      {showAgenda && <Agenda />}
      <Footer></Footer>
    </div>
  );
}

export default App;
