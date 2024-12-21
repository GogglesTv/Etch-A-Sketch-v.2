"use strict";

const grid = document.getElementById("container");
grid.style.border = "1px solid black";
grid.style.gridTemplateColumns = "repeat(16, auto)";
grid.style.display = "grid";

function createDiv() {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const div = document.createElement("div");
      div.classList.add("cell");
      div.style.border = ".75px solid black";
      div.style.padding = "10px";
      grid.appendChild(div);
    }
  }
}

createDiv();

const cells = document.querySelectorAll(".cell");
const resetBtn = document.querySelector("#reset");

cells.forEach((cell) => {
  cell.addEventListener("mouseover", () => {
    cell.style.backgroundColor = "black";
  });
});

resetBtn.addEventListener("click", () => {
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
});
