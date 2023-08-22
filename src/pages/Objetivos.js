import React, { useEffect, useState } from "react"
import './Objetivos.css'
import { getObjetivoBack, updateObjective } from "../backend/config"
import { useTranslation } from "react-i18next"

export default function Objetivos() {

    // let objetivoAtual = 1

    const [objetivoAtual, setObjetivoAtual] = useState(1)
    const [titulo, setTitulo] = useState()
    const [impedeObjetivo, setImpedeObjetivo] = useState(Array(5).fill(""));
    const [fazerObjetivo, setFazerObjetivo] = useState(Array(5).fill(""));

    useEffect(() => {
            async function fetchData(){
                const getData = await getObjetivoBack(objetivoAtual);

                setTitulo(getData.titulo)
                setImpedeObjetivo(getData.dadosImpede);
                setFazerObjetivo(getData.dadosFazer);
            }
        fetchData()
        
    }, [objetivoAtual]);

    function handleChangeImpede(event, index){
        const updateImpede = [...impedeObjetivo]
        updateImpede[index] = event.target.value
        setImpedeObjetivo(updateImpede)
    }

    function handleChangeFazer(event, index){
        const updateFazer = [...fazerObjetivo]
        updateFazer[index] = event.target.value
        setFazerObjetivo(updateFazer)
    }

    function handleChangeTitulo(event){
        setTitulo(event.target.value)
    }


    const updateObjetivo = async () => {
        const textObjetivosImpede = document.querySelectorAll('.textObjetivoFazer')
        const dadosImpede = []

        textObjetivosImpede.forEach(texto => {
            dadosImpede.push(texto.value)
        })


        const textObjetivosFazer = document.querySelectorAll('.textObjetivoImpede')
        const dadosFazer = []

        textObjetivosFazer.forEach(texto => {
            dadosFazer.push(texto.value)
        })

        console.log(dadosFazer)

        const objetivo = {
            id: objetivoAtual,
            titulo: document.getElementById('inputObjetivo').value,
            dadosImpede,
            dadosFazer
        }

        
        await updateObjective(objetivo)
    }

    function mudaObjetivo(numeroObj){
        setObjetivoAtual(numeroObj)
    }

    const { t } = useTranslation()

    return (
        <div className="containerObjetivo">
            <div className="objetivo">
                <div className="botoesObjetivo">
                    <button onClick={updateObjetivo}>{t('Salvar')}</button>
                    <button onClick={() => {mudaObjetivo(1)}} className={objetivoAtual === 1 ? "ativo" : ""}>1</button>
                    <button onClick={() => {mudaObjetivo(2)}} className={objetivoAtual === 2 ? "ativo" : ""}>2</button>
                    <button onClick={() => {mudaObjetivo(3)}} className={objetivoAtual === 3 ? "ativo" : ""}>3</button>
                </div>
                <b>{t('Objetivo')} #{objetivoAtual}</b>
                <input className="inputObjetivo" id="inputObjetivo" value={titulo}
                    onChange={(event) => handleChangeTitulo(event)}></input>
            </div>
            <div className="impedeFazer">
                <div className="vouFazerBarraSuperior">{t('O que me impede')}</div>

                {impedeObjetivo.map((item, index) => (
                    <textarea key={index} className="textObjetivoImpede" value={item}
                        onChange={(event) => handleChangeImpede(event, index)}></textarea>
                ))}

            </div>
            <div className="vouFazer">
                <div className="vouFazerBarraSuperior">{t('O que vou fazer')}</div>
                <div>

                {fazerObjetivo.map((item, index) => (
                    <textarea key={index} className="textObjetivoFazer" value={item}
                        onChange={(event) => handleChangeFazer(event, index)}></textarea>
                ))}

                </div>
            </div>
        </div>
    )
}