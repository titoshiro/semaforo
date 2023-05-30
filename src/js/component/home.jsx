import React, { useState } from "react";
import "./semaforo.css";

const Home = () => {
  const [color, setColor] = useState("");
  const [purple, setPurple] = useState(false);

  const botonPurple = () => {
    setPurple(!purple);
  };

  const alternado = () => {
    if (color === "red") {
      setColor("green");
    } else if (color === "green") {
      setColor("yellow");
    } else {
      setColor("red");
    }
  };

  return (
    <div>
      <div className="cajanegra">
        <div
          onClick={() => setColor("red")}
          className={"circuloRojo" + (color === "red" ? " luz" : "")}
        ></div>
        <div
          onClick={() => setColor("yellow")}
          className={"circuloAmarillo" + (color === "yellow" ? " luz" : "")}
        ></div>
        <div
          onClick={() => setColor("green")}
          className={"circuloVerde" + (color === "green" ? " luz" : "")}
        ></div>
        {purple && <div className={"circuloPurple"}></div>}
      </div>
      <div className="button-container">
        <button onClick={botonPurple}>Color Extra</button>
        <button onClick={alternado}>Intercambio de colores</button>
      </div>
    </div>
  );
};

export default Home;
