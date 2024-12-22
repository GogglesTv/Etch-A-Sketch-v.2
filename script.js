"use strict";

const grid = document.getElementById("container");
grid.style.border = "1px solid black";
grid.style.gridTemplateColumns = "repeat(16, auto)";
grid.style.display = "grid";

let newGrid = 0;

function createDiv() {
  if (newGrid === 0) {
    for (let i = 0; i < 16; i++) {
      for (let j = 0; j < 16; j++) {
        const div = document.createElement("div");
        div.classList.add("cell");
        div.style.border = ".75px solid black";
        div.style.padding = "10px";
        grid.appendChild(div);
      }
    }
  } else {
    for (let i = 0; i < newGrid; i++) {
      for (let j = 0; j < newGrid; j++) {
        const div = document.createElement("div");
        div.classList.add("cell");
        div.style.border = ".75px solid black";
        div.style.padding = "10px";
        grid.appendChild(div);
      }
    }
  }
}

createDiv();

const cells = document.querySelectorAll(".cell");
const resetBtn = document.querySelector("#reset");
const customGrid = document.querySelector("#custom-container");
let gridColor = "black";

grid.addEventListener("mouseover", (event) => {
  let target = event.target;
  console.log(target.classList);
  if (target.classList.contains("cell")) {
    target.style.backgroundColor = gridColor;
  }
});

resetBtn.addEventListener("click", () => {
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
});

customGrid.addEventListener("click", (event) => {
  let target = event.target;

  switch (target.id) {
    case "custom-grid":
      newGrid = parseFloat(prompt("Type in a number"));
      grid.style.gridTemplateColumns = `repeat(${newGrid}, auto)`;
      cells.forEach((cell) => cell.remove());
      createDiv();
      break;
    case "custom-color":
      gridColor = prompt("Type in a color");
      break;
  }
});
