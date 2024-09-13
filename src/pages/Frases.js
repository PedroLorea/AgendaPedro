import React, {useState, useEffect} from "react"
import './Frases.css'
import flecha from './../assets/flecha.png'
import {obterProximaFrase, obterFraseAnterior, getFrases} from '../backend/config'
import { useTranslation } from "react-i18next";


let primeiro = false;

export default function Frases() {
  
  const { t } = useTranslation()
  const [fraseAtual, setFraseAtual] = useState(null);
  
  useEffect(() => {
    
    const unsubscribe = getFrases((frases) => {
      if (frases.length > 0) {
        const autorElement = document.getElementById('autor');
        autorElement.innerText = '';
        setFraseAtual(t(frases[0]));
      }
    });
    
    return () => {
      unsubscribe();
    };
  }, [t]);
  
  function trocarProximaFrase() {
    const proximaFrase = obterProximaFrase(fraseAtual.id);
    if (proximaFrase) {
      setFraseAtual(proximaFrase);
      const fraseElement = document.getElementById('frase');
      const autorElement = document.getElementById('autor');
      fraseElement.innerText = t(proximaFrase.frase);
      autorElement.innerText = `- ${t(proximaFrase.autor)}`;
    }
  }
  
  
  return (
    <div className="containerFrases">
            <div className="fraseContainer">
                <h1 id="frase">{t('Clique na seta')}</h1>
                <p id="autor"></p>
            </div>
            <button className="flechaDireita rotacionar" onClick={trocarProximaFrase}>
                <img src={flecha} alt="Seta para direita" style={{width: '40px', height: '40px'}}/>
            </button>
        </div>
    )
}