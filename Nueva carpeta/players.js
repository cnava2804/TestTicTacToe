//Variable para contar las partidas ganadas de cada jugador
let wins = {
    player1: 0,
    player2: 0
  };
  
  // Función para aumentar el contador de partidas ganadas del jugador correspondiente
  function updateWins(player) {
    wins[player]++;
    document.getElementById(`wins-${player}`).textContent = wins[player];
  }
  
  function checkWin() {
    // Posibles combinaciones ganadoras
    let winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  
    // Recorrer todas las combinaciones ganadoras
    for (let i = 0; i < winningCombinations.length; i++) {
      let combination = winningCombinations[i];
      let firstCell = cells[combination[0]];
      let secondCell = cells[combination[1]];
      let thirdCell = cells[combination[2]];
  
      // Verificar si las tres celdas de la combinación tienen el mismo contenido (no vacías)
      if (firstCell !== "" && firstCell === secondCell && secondCell === thirdCell) {
        // Mostrar un mensaje indicando quién ganó
        alert(`Ganó el jugador ${firstCell}`);
        updateWins(firstCell.toLowerCase() + "1");
        // Reiniciar el juego
        resetGame();
        return;
      }
    }
  
    // Verificar si hay empate
    if (!cells.includes("")) {
      alert("Empate");
      resetGame();
    }
  }
  