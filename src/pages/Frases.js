import React, {useState, useEffect} from "react"
import './Frases.css'
import flecha from './../assets/flecha.png'
import {obterProximaFrase, obterFraseAnterior, getFrases} from '../backend/config'


let primeiro = false;

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


  function trocarFraseAnterior(){
    if(fraseAtual){
      const fraseAnterior = obterFraseAnterior(fraseAtual.id)
      if(fraseAnterior) {
        setFraseAtual(fraseAnterior);
        const fraseElement = document.getElementById('frase');
        const autorElement = document.getElementById('autor');
        fraseElement.innerText = fraseAnterior.frase;
        autorElement.innerText = `- ${fraseAnterior.autor}`;
      }
    }
  }

  function trocarProximaFrase() {
    if(primeiro === false ){
      const proximaFrase = obterProximaFrase(0);
      setFraseAtual(proximaFrase);
        const fraseElement = document.getElementById('frase');
        const autorElement = document.getElementById('autor');
        fraseElement.innerText = proximaFrase.frase;
        autorElement.innerText = `- ${proximaFrase.autor}`;
        primeiro = true;
    }
    else {
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
            <button className="flechaEsquerda" onClick={trocarFraseAnterior}>
                <img src={flecha} alt="Seta para esquerda" style={{width: '40px', height: '40px'}}/>
            </button>
            <div className="fraseContainer">
                <h1 id="frase">Clique nas flechas</h1>
                <p id="autor"></p>
            </div>
            <button className="flechaDireita rotacionar" onClick={trocarProximaFrase}>
                <img src={flecha} alt="Seta para direita" style={{width: '40px', height: '40px'}}/>
            </button>
        </div>
    )
}