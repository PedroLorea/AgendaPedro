import React, { useEffect, useState } from "react"
import Post from './../components/Post'
import './PostIt.css'

import { createPostIt, deletePostIt, getPostIts, updatePostIt } from "../backend/config"

export default function PostIt() {

    const [postIts, setPostIts] = useState([])

    
    useEffect(() => {
        const unsubscribe = getPostIts((updatedPostIt) => {
          setPostIts(updatedPostIt)
        })
        
        return () => {
          unsubscribe()
        }
      }, [])


    const criarPostIt = async () => {
        if (postIts.length < 4) {
            const novoPostIt = {
                id: Math.random(),
                texto: ""
            }
            await createPostIt(novoPostIt)
        }
    }


    const excluirPostIt = async (id) => {
        await deletePostIt(id)
    }

    const atualizarPostIt = async (id, newData) => {
        await updatePostIt(id, newData)
    }



    return (
        <div className="containerPostit">
            <button className="criarPost" onClick={criarPostIt}>+ Post-It</button>
            <div id="containerPosts">
                {postIts.map(postIt => {
                    return <Post key={postIt.id} id={postIt.id} onDelete={excluirPostIt} onUpdate={atualizarPostIt} texto={postIt.texto}/>
                })}
            </div>
        </div>
    )
}