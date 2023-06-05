import React from "react"
import './Frases.css'
import flechaEsquerda from './../assets/flechaEsquerda.png'
import flechaDireita from './../assets/flechaDireita.png'

export default function Frases() {
    return (
        <div className="containerFrases">
            <button className="flechaEsquerda">
                <img src={flechaEsquerda} alt="Seta para esquerda" style={{width: '40px', height: '40px'}}/>
            </button>
            <div>
                <h1>A preocupação deve nos levar a ação, não a depressão.</h1>
                <p>- Pitágoras</p>
            </div>
            <button className="flechaDireita">
                <img src={flechaDireita} alt="Seta para direita" style={{width: '40px', height: '40px'}}/>
            </button>
        </div>
    )
}