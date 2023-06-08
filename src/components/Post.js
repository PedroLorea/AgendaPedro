import React from "react";
import './../styles/Post.css';

export default function Post({ id, onDelete, onUpdate, texto }) {

  const handleClick = () => {
    onDelete(id);
  };

  const handleChange = (event) => {
    const newText = event.target.value;
    onUpdate(id, { texto: newText });
  };

  return (
    <div id="containerPost">
      <div className="barraSuperior">
        <button className="botaoX" onClick={handleClick}>X</button>
      </div>
      <textarea className="postIt" value={texto} onChange={handleChange}></textarea>
    </div>
  );
}
