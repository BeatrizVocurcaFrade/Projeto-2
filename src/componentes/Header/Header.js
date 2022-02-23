import React from "react";
import "./Header.js";
import "./Header.css";
import petHand from "../../imagem/petHand.svg";

export default function Header() {
  return (
    <div className="header">
      <img className="petHand" src={petHand} alt="petHand"></img>
      <h1>api.GET('/FRIENDS')</h1>
      <img className="petHand" src={petHand} alt="petHand"></img>
    </div>

  );
}
