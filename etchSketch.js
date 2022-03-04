function listener(colorState = false) {
    const grid = document.querySelectorAll('.cell');    // NodeList of .cell elements
    // loop through each .cell elements and assign mouseover eventListener
    grid.forEach(cell => cell.addEventListener('mouseover', (e) => {    // on event of event
        if(colorState) {
            cell.style.backgroundColor = makeRainbow();
        } else {
            cell.style.backgroundColor = 'black'                        // add background color
        }
        
        console.log(cell);
    }));
};

// function that checks the color of the div.
// if it already has a background defined, then 
// return that color but darker.
function checkColor() {

}

// function which creates the grid based on input size to define number of cells per side
function makeGrid(size = 16, color = false) {
    const numCells = size ** 2;  // size of grid -- number of cells in the grid
    const container = document.querySelector('#container'); // select element with id=container
    for(let i=0; i<numCells; i++) {
        const cell = container.appendChild(document.createElement("div")); // append child div to container element, appendChild reference saved in variable child
        cell.className = 'cell'; // assign class name 'etch' to child reference element
    }
    
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // change CSS grid property inside container to base number of columns
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`; // change CSS grid property inside container to base number of rows.

    listener(color);
}

// function to clear grid and prompt for new size
function clearGrid(colorState = false) {
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
    makeGrid(newSize, colorState);
}

function randomize() {
    // inclusive for 0 and 255?
    return Math.floor(Math.random() * 256)
}

function makeRainbow() {
    const color = `rgb(${randomize()}, ${randomize()}, ${randomize()})`;
    return color;
}

// Trigger creation of grid when DOM is loaded
window.addEventListener('DOMContentLoaded', (e) => {makeGrid()});


const reset = document.querySelector('#reset');
reset.addEventListener('click', (e) => {clearGrid(rgb)} );

let rgb = false;
const rainbow = document.querySelector('#rainbow');
rainbow.addEventListener('click', (e) => {
    rgb ? rgb = false : rgb = true;
    listener(rgb);
    console.log(rgb);
});

