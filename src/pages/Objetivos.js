import React from "react"
import './Objetivos.css'
import { createObjective } from "../backend/config"

export default function Objetivos() {

    let objetivoAtual = 0

    const criarObjetivo = async () => {
        const textObjetivosImpede = document.querySelectorAll('.textObjetivoFazer')
        const dadosImpede = []

        textObjetivosImpede.forEach(texto => {
            dadosImpede.push(texto.value)
        })

        const textObjetivosFazer = document.querySelectorAll('.textObjetivoImpede')
        const dadosFazer = []

        textObjetivosFazer.forEach(texto => {
            dadosFazer.push(texto.value)
            console.log(texto + 'a')
        })

        const objetivo = {
            id: objetivoAtual,
            titulo: document.getElementById('inputObjetivo').value,
            dadosImpede,
            dadosFazer
        }

        
        await createObjective(objetivo)
    }

    function updateObjetivo(){
        //-> bd -> id existe -> se sim updateObjetivo, se não createObjetivo
    }

    const getObjetivo = async (id) => {

    }

    function mudaObjetivo(numeroObj){
        objetivoAtual = numeroObj
    }


    return (
        <div className="containerObjetivo">
            <div className="objetivo">
                <div className="botoesObjetivo">
                    <button onClick={criarObjetivo}>Salvar</button>
                    <button onClick={() => {mudaObjetivo(1); getObjetivo(1)}}>1</button>
                    <button onClick={() => {mudaObjetivo(2); getObjetivo(2)}}>2</button>
                    <button onClick={() => {mudaObjetivo(3); getObjetivo(3)}}>3</button>
                </div>
                Objetivo #1:
                <input className="inputObjetivo" id="inputObjetivo"></input>
            </div>
            <div className="impedeFazer">
                <div className="vouFazerBarraSuperior">O que me impede</div>
                    <textarea className="textObjetivoImpede"></textarea>
                    <textarea className="textObjetivoImpede"></textarea>
                    <textarea className="textObjetivoImpede"></textarea>
                    <textarea className="textObjetivoImpede"></textarea>
                    <textarea className="textObjetivoImpede"></textarea>
            </div>
            <div className="vouFazer">
                <div className="vouFazerBarraSuperior">O que vou fazer</div>
                <textarea className="textObjetivoFazer"></textarea>
                <textarea className="textObjetivoFazer"></textarea>
                <textarea className="textObjetivoFazer"></textarea>
                <textarea className="textObjetivoFazer"></textarea>
                <textarea className="textObjetivoFazer"></textarea>
            </div>
        </div>
    )
}