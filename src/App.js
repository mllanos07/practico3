import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [selectedPlayer1, setSelectedPlayer1] = useState("");
  const [selectedPlayer2, setSelectedPlayer2] = useState("");
  const [ganador, setGanador] = useState("");

  const handleChangePlayer1 = event => {
    setSelectedPlayer1(event.target.value);
  };

  const handleChangePlayer2 = event => {
    setSelectedPlayer2(event.target.value);
  };

  const handleGanador = () => {
    if (selectedPlayer1 && selectedPlayer2) {
      if (selectedPlayer1 === selectedPlayer2)
        setGanador("Empate");
      if (selectedPlayer1 === "piedra") {
        if (selectedPlayer2 === "papel") setGanador("Jugador 2 ha ganado");
        if (selectedPlayer2 === "tijera") setGanador("Jugador 1 ha ganado")
      }
      if (selectedPlayer1 === "papel") {
        if (selectedPlayer2 === "piedra") setGanador("Jugador 2 ha ganado");
        if (selectedPlayer2 === "tijera") setGanador("Jugador 2 ha ganado");
      }
      if (selectedPlayer1 === "tijera") {
        if (selectedPlayer2 === "piedra") setGanador("Jugador 2 ha ganado");
        if (selectedPlayer2 === "papel") setGanador ("Jugador 1 ha ganado")
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>Jugador 1</p>
        <label htmlFor="colorSelect">Selecciona una opcion:</label>
        <select onChange={handleChangePlayer1}>
          <option value=""></option>
          <option value="piedra">Piedra</option>
          <option value="papel">Papel</option>
          <option value="tijera">Tijera</option>
        </select>
        <p>Seleccionaste: {selectedPlayer1}</p>
        <p>Jugador 2</p>
        <label htmlFor="colorSelect">Selecciona una opcion:</label>
        <select onChange={handleChangePlayer2}>
          <option value=""></option>
          <option value="piedra">Piedra</option>
          <option value="papel">Papel</option>
          <option value="tijera">Tijera</option>
        </select>
        <p>Seleccionaste: {selectedPlayer2}</p>
        <button onClick={handleGanador}>Jugar</button>
        {ganador && <p>Resultado: {ganador}</p>}
      </header>
      
    </div>
    
  );
}

export default App;
