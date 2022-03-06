let rgb = false; // global variable to toggle color state


// function to clear grid and prompt for new size
function clearGrid() {
    // remove all divs from the grid
    const grid = document.getElementsByClassName('cell');
    while(grid[0]) {  // while there are cells, remove cell
        grid[0].parentNode.removeChild(grid[0]);
    };

    let newSize = parseInt(window.prompt("How many squares per side?"));  // prompt for new grid size
    while(isNaN(newSize)) { // if nothing or string is entered
        newSize = parseInt(window.prompt("How many squares per side?"));
    }
    while(newSize > 100) { // if entered value is too large
        newSize = parseInt(window.prompt("Maximum size is 100"));
    }
    loadGrid(newSize);
}

// define function to generate random numbers from 0 - 359
function randomize() {
    return Math.floor(Math.random() * 359) // return random number between 0 - 359 for HSL value
}

// function to create the color string
function getColor() {
    if(rgb) { // if hsl global variable is set, return random color
        return `hsl(${randomize()}, 100%, 50%)`
    } else {
        return 'black';
    }
}




function listener() {
    const grid = document.querySelectorAll('.cell');    // NodeList of .cell elements
    // loop through each .cell elements and assign mouseover eventListener
    grid.forEach(cell => cell.addEventListener('mouseover', (e) => {    // on event of event

        if(!cell.getAttribute('data-color')) {          // if element data attribute is null
            let color = getColor();                     // color to assign the cell
            cell.style.backgroundColor = color;         // assign background color to cell
            cell.setAttribute('data-color', color);     // save assigned color as data attribute -- style.backgroundColor converts hsl to rgb
        } else { // if element has already been assigned a data attribute
            if (cell.style.backgroundColor !== ("black" || "rgb(0, 0, 0)")) {                   // if cell is not already black
                const dataColor = cell.getAttribute('data-color');
                const hslValues = dataColor.match(/\d\d?\d?/g);                                 // get hsl values saved in data-color attribute
                const newLightness = (parseInt(hslValues[2]) - 5).toString();                   // make 5% darker
                const newColor = `hsl(${hslValues[0]}, ${hslValues[1]}%, ${newLightness}%)`;
                cell.setAttribute('data-color', newColor);                                      // re-assign darker color
                cell.style.backgroundColor = newColor;
            }
        }
    }));
};

// function which creates the grid based on input size to define number of cells per side
function makeGrid(size = 16) {
    const numCells = size ** 2;  // size of grid -- number of cells in the grid
    const container = document.querySelector('#container'); // select element with id=container
    for(let i=0; i<numCells; i++) {  // loop to create the div elements
        const cell = container.appendChild(document.createElement("div")); // append child div to container element, appendChild reference saved in variable child
        cell.className = 'cell'; // assign class name 'etch' to child reference element
    }
    
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // change CSS grid property inside container to base number of columns
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`; // change CSS grid property inside container to base number of rows.
}

// function to create grid and start listener
function loadGrid(size) {
    makeGrid(size);
    listener();
}

// create event listener for Reset button
const reset = document.querySelector('#reset');
reset.addEventListener('click', (e) => {clearGrid()} );

// create event listener for Rainbow button
const rainbow = document.querySelector('#rainbow');
rainbow.addEventListener('click', (e) => {
    (!rgb) ? rgb = true : rgb = false;
});

// Trigger creation of grid when DOM is loaded
window.addEventListener('DOMContentLoaded', (e) => {
    loadGrid(16, "black");
});