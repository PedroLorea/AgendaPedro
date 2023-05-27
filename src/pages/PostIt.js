import React, { useState } from "react"
import Post from './../components/Post'
import './PostIt.css'

export default function PostIt() {

    const [postIts, setPostIts] = useState([])

    const criarPostIt = () => {
        if (postIts.length < 4) {
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
        <div className="containerPostit">
            <button className="criarPost" onClick={criarPostIt}>+ Post-It</button>
            <div id="containerPosts">
                {postIts.map(postIt => {
                    return <Post key={postIt.id} id={postIt.id} onDelete={excluirPostIt}/>
                })}
            </div>
        </div>
    )
}