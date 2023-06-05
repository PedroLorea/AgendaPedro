import React, { useState } from "react";
import './../styles/Post.css';

export default function Post({ id, onDelete, onUpdate }) {
  const [text, setText] = useState(""); // Estado para armazenar o texto do Post It

  const handleClick = () => {
    onDelete(id);
  };

  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText); // Atualiza o estado com o novo texto
    onUpdate(id, { texto: newText });
  };

  return (
    <div id="containerPost">
      <div className="barraSuperior">
        <button className="botaoX" onClick={handleClick}>X</button>
      </div>
      <textarea className="postIt" value={localStorage.getItem('TEXTO')} onChange={handleChange}></textarea>
    </div>
  );
}
