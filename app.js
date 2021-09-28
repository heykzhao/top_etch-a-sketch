let squareWidth = 25;
let squareTotal = squareWidth * squareWidth;
const etchASketchGrid = document.querySelector("#etch-a-sketch-container");
const etchASketchGridSize = document.getElementById("etch-a-sketch-container");
etchASketchGridSize.style.setProperty("--gridSize", squareWidth);

for (let i = 0; i < squareTotal; i+=1) {
    const etchASketchBlock = document.createElement("div");
    etchASketchBlock.className += "block";
    etchASketchGrid.appendChild(etchASketchBlock)
}
