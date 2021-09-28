let squareWidth = 50;
let squareTotal = squareWidth * squareWidth;

const etchASketchGridSize = document.getElementById("etch-a-sketch-container");
etchASketchGridSize.style.setProperty("--gridSize", squareWidth);

const etchASketchGrid = document.querySelector("#etch-a-sketch-container");
for (let i = 0; i < squareTotal; i+=1) {
    const initialBlock = document.createElement("div");
    initialBlock.className += "block";
    etchASketchGrid.appendChild(initialBlock)
}

function addColor(e) {
    e.target.classList.add("hovered");
};

const etchASketchBlocks = document.querySelectorAll(".block");
etchASketchBlocks.forEach(etchASketchBlock => etchASketchBlock.addEventListener("mouseover",addColor));
