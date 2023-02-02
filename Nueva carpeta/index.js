// Array para almacenar el estado de las celdas (vacío, "X", "O")
let cells = Array(9).fill("");

// Variable para almacenar el jugador actual ("X" o "O")
let currentPlayer = "X";

// Seleccionar todas las celdas
const allCells = document.querySelectorAll("td");

// Agregar un evento a cada celda cuando se haga clic
allCells.forEach(function(cell) {
  cell.addEventListener("click", function() {
    // Obtener el número de la celda que se ha clicado
    let cellIndex = cell.id.split("-")[1] - 1;

    // Si la celda está vacía
    if (cells[cellIndex] === "") {
      // Actualizar el contenido de la celda con el jugador actual
      cell.textContent = currentPlayer;

      // Actualizar el estado de la celda en el array
      cells[cellIndex] = currentPlayer;

      // Verificar si hay un ganador
      checkWin();

      // Cambiar el jugador actual
      currentPlayer = (currentPlayer === "X") ? "O" : "X";
    }
  });
});

function checkWin() {
  // Código para verificar si hay un ganador
  // ...
}
