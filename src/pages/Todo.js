import React, { useEffect, useState } from "react"
import './Todo.css'
import { createToDo, getToDo } from "../backend/config"
import DeleteIcon from '@mui/icons-material/Delete';
import { removeTodo } from "../backend/config";
import { useTranslation } from "react-i18next";

export default function Todo() {

    const {t} = useTranslation()

    const [listaItens, setListaItens] = useState([])
    const [numeroPagina, setNumeroPagina] = useState(1)

    const [itens, setItens] = useState([])
    const [pageButtons, setPageButtons] = useState([])

    const itensPorPagina = 8

    const handlePageChange = (pageNumber) => {
        setNumeroPagina(pageNumber)
    }


    useEffect(() => {
        const unsubscribe = getToDo((updatedToDo) => {
          setListaItens(updatedToDo)
        })         
        
        return () => {
          unsubscribe()
        }
      }, [])


    useEffect(() => {
        const inicio = (numeroPagina - 1) * itensPorPagina // inicio da lista
        const fim = inicio + itensPorPagina //final da lista
        const itensPaginados = listaItens.slice(inicio, fim) //pega tudo que tiver no meio
        setItens([])
        setItens(itensPaginados)

        const totalPaginas = Math.ceil(listaItens.length / itensPorPagina) //Quantas paginas tem, arredonda pra cima
        const pageButtonsPaginado = []

        for (let i = 1; i <= totalPaginas; i++) {
            pageButtonsPaginado.push(
                <button className="botaoPagina" key={i} onClick={() => handlePageChange(i)} disabled={i === numeroPagina}>{i}</button>
            )
        }

        setPageButtons(pageButtonsPaginado)

    }, [listaItens, numeroPagina])

    const criarItem = async () => {
    
        const novoItem = {
            timestamp: new Date(),
            tarefa: document.getElementById('input-item').value
        }
        
        document.getElementById('input-item').value = "";

        await createToDo(novoItem)

    }

    const removeItem = async (id) => {
        await removeTodo(id)
    }

    return (
        <div className="containerList">
            <button className="buttonCriar" onClick={criarItem}>{t('Criar Tarefa')}</button>

            <input type="text" id="input-item"></input>

            <ul>
                {itens.map(item => {
                    return <div key={item.id} className="liTarefa">
                        <li>{item.tarefa}</li>
                        <DeleteIcon className="lataRemover" fontSize="large" onClick={() => removeItem(item.id)}/>
                        </div>
                })}
            </ul>
            <div> {pageButtons} </div>
        </div>
    )
}