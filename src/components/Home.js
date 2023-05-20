import './../styles/Home.css';
import Main from './../template/Main'
import React from 'react'

export default function Home(props) {
  return (
    <Main>
        <div className = "home">
          <div className = "logoHome">
            AgendaPedro
          </div>
          <button className="buttonEntrar" onClick={props.showAgenda}>
            ENTRAR
          </button>
        </div>
    </Main>
  )
}
