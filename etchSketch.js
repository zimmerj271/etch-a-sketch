// function which creates the grid based on input size to define number of cells per side
function makeGrid(size = 16) {
    const numCells = size ** 2;  // size of grid -- number of cells in the grid
    const container = document.querySelector('#container'); // select element with id=container
    for(let i=0; i<numCells; i++) {
        const cell = container.appendChild(document.createElement("div")); // append child div to container element, appendChild reference saved in variable child
        cell.className = 'cell'; // assign class name 'etch' to child reference element
        let color;
        rgb ? color = makeRainbiow() : color = "black";
        // if(rgb) {
        //     // change background color to rainbow
        //     color = makeRainbow();
        // } else {
        //     // change background color to black
        //     color = "black";
        // }
        cell.addEventListener('mouseover', (e) => {cell.style.backgroundColor = color});
    
        // container.appendChild(document.createElement("div")).className = 'etch'; // one liner
    }
    
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // change CSS grid property inside container to base number of columns
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`; // change CSS grid property inside container to base number of rows.
}

// function to clear grid and prompt for new size
function clearGrid() {
    // remove all divs from the grid
    const grid = document.getElementsByClassName('cell');
    while(grid[0]) {
        grid[0].parentNode.removeChild(grid[0]);
    };

    let newSize = parseInt(window.prompt("How many squares per side?"));
    console.log(newSize);
    while(isNaN(newSize)) {
        newSize = parseInt(window.prompt("How many squares per side?"));
    }
    while(newSize > 100) {
        newSize = parseInt(window.prompt("Maximum size is 100"));
    }
    makeGrid(newSize);
}

function randomize() {
    // inclusive for 0 and 255?
    return Math.floor(Math.random() * 256)
}

function makeRainbow() {
    const color = `rgb(${randomize()}, ${randomize()}, ${randomize()})`;
    return color;
}

makeGrid();

const reset = document.querySelector('#reset');
reset.addEventListener('click', (e) => {clearGrid()} );

let rbg = false;
const rainbow = document.querySelector('#rainbow');
rainbow.addEventListener('click', (e) => {
    if(rbg) {
        rbg = false;
    } else {
        rbg = true;
    }
    console.log(rbg);
});

