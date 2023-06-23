import React, {useState} from 'react'
import Agenda from './components/Agenda'
import Home from './components/Home'
import Header from './template/Header'
import './App.css';

function App() {

  const [showHome, setShowHome] = useState(true)
  const [showAgenda, setShowAgenda] = useState(false)

  const handleShowAgenda = () => {
    setShowHome(false)
    setShowAgenda(true)
  }

  const handleShowHome = () => {
    setShowHome(true)
    setShowAgenda(false)
  }

  return (
    <div className='app'>
      <Header></Header>
      {showHome && <Home showAgenda={handleShowAgenda}/>}
      {showAgenda && <Agenda showHome={handleShowHome}/>}
    </div>
  );
}

export default App;