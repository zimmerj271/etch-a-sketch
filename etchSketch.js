let rgb = false;
const rainbow = document.querySelector('#rainbow');
rainbow.addEventListener('click', (e) => {
    if(!rgb) {
        rgb = true;
        listener("hsl");
    } else {
        rgb = false;
        listener("black");
    }
    console.log(rgb);
});

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
    loadGrid(newSize, colorState);
}

function randomizeRGB() {
    // inclusive for 0 and 255?
    return Math.floor(Math.random() * 256) // return random number between 0 - 255 for RGB value
}

function randomizeHSL() {
    return Math.floor(Math.random() * 359) // return random number between 0 - 359 for HSL value
}

function makeRainbow(colorScheme) {
    // let color;
    switch (colorScheme) {
        // case 'rgb':
        //     return `rgb(${randomizeRGB()}, ${randomizeRGB()}, ${randomizeRGB()})`;
        case 'black':
            return 'black'
        case 'hsl':
            return `hsl(${randomizeHSL()}, 100%, 50%)`
            // return 'green';
        default:
            return 'black';
    }
}

const reset = document.querySelector('#reset');
reset.addEventListener('click', (e) => {clearGrid(rgb)} );
/* *** listener() running twice after pushing rainbow????s */
function listener(colorScheme) {
    const grid = document.querySelectorAll('.cell');    // NodeList of .cell elements
    // loop through each .cell elements and assign mouseover eventListener
    grid.forEach(cell => cell.addEventListener('mouseover', (e) => {    // on event of event
        // if(cell.getAttribute('data-color')) {
        //     console.log('color already set');
        // } else {
        //     let color = makeRainbow(colorStyle);            // get color to assign to the cell
        //     cell.style.backgroundColor = color;         // assign background color to cell
        //     cell.setAttribute('data-color', color);     // save assigned color as data attribute -- style.backgroundColor converts hsl to rgb
        // }
        console.log(colorScheme);
        console.log(cell.getAttribute('data-color'));
        if(!cell.getAttribute('data-color')) {
            
            // let color = (colorScheme == "black") ? "black" : makeRainbow('hsl')
            let color;
            if(colorScheme == "black") {
                color = "black";
            } else {
                color = makeRainbow('hsl');
            }
            console.log(cell.getAttribute('data-color'), color);
            // let color = makeRainbow(colorStyle);            // get color to assign to the cell
            console.log(color);
            cell.style.backgroundColor = color;         // assign background color to cell
            cell.setAttribute('data-color', color);     // save assigned color as data attribute -- style.backgroundColor converts hsl to rgb
        } else {
            // do nothing
            console.log("do nothing");
        }


        // console.log(cell.getAttribute('data-color'));
        // let color = makeRainbow(colorStyle);            // get color to assign to the cell
        // cell.style.backgroundColor = color;         // assign background color to cell
        // cell.setAttribute('data-color', color);     // save assigned color as data attribute -- style.backgroundColor converts hsl to rgb
        
        console.log(cell.getAttribute('data-color'));
        console.log(cell);
    }));
};

// function which creates the grid based on input size to define number of cells per side
function makeGrid(size = 16, color) {
    const numCells = size ** 2;  // size of grid -- number of cells in the grid
    const container = document.querySelector('#container'); // select element with id=container
    for(let i=0; i<numCells; i++) {
        const cell = container.appendChild(document.createElement("div")); // append child div to container element, appendChild reference saved in variable child
        cell.className = 'cell'; // assign class name 'etch' to child reference element
    }
    
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // change CSS grid property inside container to base number of columns
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`; // change CSS grid property inside container to base number of rows.


}





function loadGrid(size, colorState) {
    makeGrid(size);
    listener(colorState);
}

// Trigger creation of grid when DOM is loaded
window.addEventListener('DOMContentLoaded', (e) => {
    loadGrid(16, "black");
});