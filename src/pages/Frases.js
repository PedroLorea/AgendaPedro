import React, {useState, useEffect} from "react"
import './Frases.css'
import flechaEsquerda from './../assets/flechaEsquerda.png'
import flechaDireita from './../assets/flechaDireita.png'
import {obterProximaFrase, getFrases} from '../backend/config'


export default function Frases() {

    const [fraseAtual, setFraseAtual] = useState(null);

    useEffect(() => {
        const unsubscribe = getFrases((frases) => {
          if (frases.length > 0) {
            setFraseAtual(frases[0]);
          }
        });
    
        return () => {
          unsubscribe();
        };
      }, []);

  function trocarFrase() {
    if (fraseAtual) {
      const proximaFrase = obterProximaFrase(fraseAtual.id);
      if (proximaFrase) {
        setFraseAtual(proximaFrase);
        const fraseElement = document.getElementById('frase');
        const autorElement = document.getElementById('autor');
        fraseElement.innerText = proximaFrase.frase;
        autorElement.innerText = `- ${proximaFrase.autor}`;
      }
    }
  }
      

    return (
        <div className="containerFrases">
            <button className="flechaEsquerda">
                <img src={flechaEsquerda} alt="Seta para esquerda" style={{width: '40px', height: '40px'}}/>
            </button>
            <div className="fraseContainer">
                <h1 id="frase">Aperte o botão</h1>
                <p id="autor"></p>
            </div>
            <button className="flechaDireita" onClick={trocarFrase}>
                <img src={flechaDireita} alt="Seta para direita" style={{width: '40px', height: '40px'}}/>
            </button>
        </div>
    )
}