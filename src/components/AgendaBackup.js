import React, { useEffect, useState } from "react"
import Main from './../template/Main'
import './../styles/Agenda.css'


export default function Agenda() {

    const [listaItens, setListaItens] = useState([])
    const [numeroPagina, setNumeroPagina] = useState(1)

    const [itens, setItens] = useState([])
    const [pageButtons, setPageButtons] = useState([])

    const itensPorPagina = 10

    const handlePageChange = (pageNumber) => {
        setNumeroPagina(pageNumber)
    }

    useEffect(() => {
        const inicio = (numeroPagina - 1) * itensPorPagina // inicio da lista
        const fim = inicio + itensPorPagina //final da lista
        const itensPaginados = listaItens.slice(inicio, fim) //pega tudo que tiver no meio
        setItens([])
        setItens(itensPaginados)

        console.log(inicio, "=", fim, "=", itensPaginados, "=", listaItens, "=", itens)

        const totalPaginas = Math.ceil(listaItens.length / itensPorPagina) //Quantas paginas tem, arredonda pra cima
        const pageButtonsPaginado = []

        for (let i = 1; i <= totalPaginas; i++) {
            pageButtonsPaginado.push(
                <button className="botaoPagina" key={i} onClick={() => handlePageChange(i)} disabled={i === numeroPagina}>{i}</button>
            )
        }

        setPageButtons(pageButtonsPaginado)

    }, [listaItens, numeroPagina])

    const criarItem = () => {
        const item = document.getElementById('input-item')
        setListaItens([...listaItens, item.value])
        item.value = ''
    }

    return (
        <Main>
            <div className="container">
                <button className="buttonCriar" onClick={criarItem}>Criar Novo Item</button>

                <input type="text" id="input-item"></input>

                <ul>
                    {itens.map(item => {
                        console.log(item)
                        return <li>{item}</li>
                    })}
                </ul>
                <div> {pageButtons} </div>
            </div>
        </Main>
    )


}
