import React from "react"
import './Objetivos.css'

export default function Objetivos() {
    //Resolver o problema de receber dados do firebase
    //Arrumar a estrutura e colocar mais frases 
    //Fazer objetivos
    //Criar tarefa poder efeitar a <li>


    return (
        <div className="containerObjetivo">
            <div className="objetivo">
                <div className="botoesObjetivo">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                </div>
                Objetivo #1:
                <input className="inputObjetivo"></input>
            </div>
            <div className="impedeFazer">
                <div className="vouFazerBarraSuperior">O que me impede</div>
                    <textarea className="textObjetivo">•</textarea>
                    <textarea className="textObjetivo">•</textarea>
                    <textarea className="textObjetivo">•</textarea>
                    <textarea className="textObjetivo">•</textarea>
                    <textarea className="textObjetivo">•</textarea>
            </div>
            <div className="vouFazer">
                <div className="vouFazerBarraSuperior">O que vou fazer</div>
                <textarea className="textObjetivo">•</textarea>
                <textarea className="textObjetivo">•</textarea>
                <textarea className="textObjetivo">•</textarea>
                <textarea className="textObjetivo">•</textarea>
                <textarea className="textObjetivo">•</textarea>
            </div>
        </div>
    )
}