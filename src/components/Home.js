import './../styles/Home.css';
import React from 'react'

export default function Home(props) {
  return (
    <div className='containerHome'>
      <div className="home">
        <div className="logoHome">
          AgendaPedro
        </div>
        <button className="buttonEntrar" onClick={props.showAgenda}>
          ENTRAR
        </button>
      </div>
    </div>
  )
}
