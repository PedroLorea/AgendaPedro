import React, { useEffect, useState } from "react"
import Main from './../template/Main'
import './../styles/Agenda.css'
import Post from "./Post"


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

    //post it

    const [postIts, setPostIts] = useState([])

    const criarPostIt = () => {
        if(postIts.length < 2){
            const novoPostIt = {
                id: Math.random()
            }
            setPostIts([...postIts, novoPostIt])
        }
    }

    const excluirPostIt = (id) => {
        const novosPostIts = postIts.filter((postIt) => postIt.id !== id)
        setPostIts(novosPostIts);
    }

    return (
        <Main>
            <div className="separaMain">
                <div className="containerList">
                    <button className="buttonCriar" onClick={criarItem}>Criar Novo Item</button>

                    <input type="text" id="input-item"></input>

                    <ul>
                        {itens.map(item => {
                            return <li>{item}</li>
                        })}
                    </ul>
                    <div> {pageButtons} </div>
                </div>
                <div id="containerPosts">
                    <button className="criarPost" onClick={criarPostIt}>+ Post-It</button>
                    {postIts.map(postIt => {
                        return <Post key={postIt.id} id={postIt.id} onDelete={excluirPostIt}/>
                    })}
                </div>
            </div>
        </Main>
    )



}
