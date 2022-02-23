import React, { useState } from "react";
import "./Box.css";
import more from "../../imagem/more.svg";
import Dog from "../Dog/Dog";

export default function Box() {
  const [qtyDogs, setQtyDogs] = useState(1);

  const createDogs = () => {
    const dogs = []
    for (let i = 0; i < qtyDogs; i++) {
          dogs.push(<Dog/>)
    }
    return dogs;
  }
  return (
    <>
      <h2>Um site para quem ama cachorrinhos!</h2>

      <div className="dogs"> {createDogs()} </div>

      <p>Mostrar Mais</p>

      <span className="more">
        <img
          alt="more"
          src={more}
          onClick={() => {setQtyDogs(qtyDogs+1); }}
        />
      </span>
    </>
  );
}
