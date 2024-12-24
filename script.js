"use strict";

let gridColor = "black";

function createGrid(size) {
  const grid = document.getElementById("container");
  grid.innerHTML = "";
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.border = ".75px solid";
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = gridColor;
    });
    grid.appendChild(cell);
  }
}

createGrid(16);

const resetBtn = document.querySelector("#reset");
const customGrid = document.querySelector("#custom-container");

resetBtn.addEventListener("click", () => {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
});

customGrid.addEventListener("click", (event) => {
  const cells = document.querySelectorAll(".cell");
  let target = event.target;

  switch (target.id) {
    case "custom-grid":
      let newGrid = parseFloat(prompt("Type in a number 1-100"));
      cells.forEach((cell) => cell.remove());
      createGrid(newGrid);
      break;
    case "custom-color":
      cells.forEach((cell) => (cell.style.backgroundColor = "white"));
      gridColor = prompt("Type in a color");
      break;
  }
});
