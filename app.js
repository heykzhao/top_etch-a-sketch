// Set Initial Grid Size 
let squareWidth = 32
let squareTotal = squareWidth * squareWidth;
const etchASketchGridSize = document.getElementById("etch-a-sketch-container");
let etchASketchGrid = document.querySelector("#etch-a-sketch-container");
setGridWidth();
createAllBlocks();
startDrawing();

// Allow for Grid Size changes
const squareWidthInput = document.getElementById("squareWidth");
squareWidthInput.addEventListener("change", resetGrid)

//keyboard shortcuts to initiate clearing of board, start drawing, and stop drawing
const clearBoardButton = document.querySelector("#clear-board-button");
document.onkeyup = function(e){
    if (e.key == "c") {
        clearBoardButton.click();
    } else if (e.key == "s") {
        stopDrawing();
    } else if (e.key == "d") {
        startDrawing();
    }
};

function setGridWidth() {
    etchASketchGridSize.style.setProperty("--gridSize", squareWidth);
};

function addColor(e) {
    e.target.classList.add("hovered");
};

function clearBoard() {
    etchASketchBlocks.forEach(etchASketchBlock => etchASketchBlock.classList.remove("hovered"));
};

function stopDrawing() {
    etchASketchBlocks.forEach(etchASketchBlock => etchASketchBlock.removeEventListener("mouseover",addColor, false));
}

function startDrawing() {
    etchASketchBlocks.forEach(etchASketchBlock => etchASketchBlock.addEventListener("mouseover",addColor));
}

function createAllBlocks() {
    for (let i = 0; i < squareTotal; i+=1) {
        const initialBlock = document.createElement("div");
        initialBlock.className += "block";
        etchASketchGrid.appendChild(initialBlock)
    }
    etchASketchBlocks = document.querySelectorAll(".block");
}

function removeAllBlocks() {
    document.querySelectorAll(".block").forEach(e => e.remove());
}

function resetGrid(e) {
    squareWidth = e.target.value;
    squareTotal = squareWidth * squareWidth;
    removeAllBlocks();
    setGridWidth();
    createAllBlocks();
    startDrawing();
};