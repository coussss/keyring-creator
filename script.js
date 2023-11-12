let colour = "rgb(144, 3, 11)";
let classCount = 1

populateGrid();
mouse();

function populateGrid() {
    const container = document.querySelector('.sketch-pad');
    const previewContainer = document.querySelector('.preview-boxes');
    let squares = container.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(13, 1fr)`
    container.style.gridTemplateRows = `repeat(13, 1fr)`
    previewContainer.style.gridTemplateColumns = `repeat(13, 1fr)`
    previewContainer.style.gridTemplateRows = `repeat(13, 1fr)`
    for (i = 0; i < 13*13; i++) {
        const box = document.createElement('div');
        box.style.cursor = 'crosshair';
        box.addEventListener("mousemove", colourSquare);
        box.addEventListener("click", colourSingleSquare);
        box.classList.add('box-' + classCount);
        box.setAttribute("id", "box")
        container.appendChild(box)
        classCount++;
    }
    classCount = 1;

    for (i = 0; i < 13*13; i++) {
        const previewBox = document.createElement('div');
        previewBox.setAttribute("id", "box");
        previewBox.classList.add('box-' + classCount);
        previewContainer.appendChild(previewBox)
        classCount++;
    }
    classCount = 1;
}

let mouseDown = 0;

function mouse() {
    window.onmousedown = () => {
        ++mouseDown;
        if (mouseDown > 1) {
            --mouseDown;
        }
        if (mouseDown) {
            console.log("mouse down")
            console.log(mouseDown)
        }
    }
    window.onmouseup = () => {
        --mouseDown;
        console.log("mouse up")
        console.log(mouseDown)
    }
}

function colourSquare() {
    if (mouseDown) {
        let box = document.querySelectorAll('.' + this.className);
        box.forEach((div) => div.style.backgroundColor = colour);
    }
}
function colourSingleSquare() {
    let box = document.querySelectorAll('.' + this.className);
    box.forEach((div) => div.style.backgroundColor = colour);
}

function changeColor(choice) {
    colour = choice;
}

function clearGrid() {
    let squares = document.querySelectorAll('#box');
    squares.forEach((div) => div.style.backgroundColor = "transparent");
}

function fill() {
    let squares = document.querySelectorAll('#box');
    squares.forEach((div) => div.style.backgroundColor = colour);
}

function erase() {
    colour = "transparent";
}


