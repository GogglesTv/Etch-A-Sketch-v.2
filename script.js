"use strict";

const body = document.body;
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";

const grid = document.getElementById("container");
grid.style.border = "3px solid black";
grid.style.gridTemplateColumns = "repeat(16, auto)";
grid.style.display = "grid";

function createDiv() {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const div = document.createElement("div");
      div.style.border = ".75px solid black";
      div.style.padding = "10px";
      grid.appendChild(div);
    }
  }
}

createDiv();
