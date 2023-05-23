import React from "react"
import './PostIt.css'

export default function PostIt({id, onDelete}){

    const handleClick = () => {
        onDelete(id)
    }

    return (
        <div id="containerPost">
            <div className="barraSuperior">
                <button className="botaoX" onClick={handleClick}>X</button>
            </div>
            <textarea className="postIt"></textarea>
        </div>
    )
}