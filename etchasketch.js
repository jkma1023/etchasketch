let grid = document.querySelector("#container");
let answer;
let widthPercent;
let button = document.querySelector("#size");
button.addEventListener("click", () => askSize());

function clearGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
}

function askSize() {
  let response = parseInt(prompt("Specify the grid size:"));
  if (response > 100) {
    alert("Too large!");
  } else {
    answer = response;
    widthPercent = 100 / answer;
    clearGrid();
    generateGrid();
  }
}

function generateGrid() {
  for (let i = 0; i < answer; i++) {
    let row = document.createElement("div");
    row.style.display = "flex";
    row.style.width = "100%";
    for (let i = 0; i < answer; i++) {
      const square = document.createElement("div");
      square.style.position = "relative";
      square.style.width = widthPercent.toString() + "%";
      square.style.height = "0";
      square.style.paddingBottom = widthPercent.toString() + "%";
      square.style.border = "1px solid black";
      square.style.background = "white";

      square.addEventListener("mouseover", function (e) {
        e.target.style.background = "black";
      });

      row.appendChild(square);
    }
    grid.appendChild(row);
  }
}
