
// const base = 16; // number of cells per side




// create numCells of child divs and append to container
// give each new div class 'etch'
// add a mouseover event listener to each new div and assign another class when event occurs
function makeGrid(size = 16) {
    const numCells = size ** 2;  // size of grid -- number of cells in the grid
    const container = document.querySelector('#container'); // select element with id=container
    for(let i=0; i<numCells; i++) {
        const cell = container.appendChild(document.createElement("div")); // append child div to container element, appendChild reference saved in variable child
        cell.className = 'cell'; // assign class name 'etch' to child reference element
        cell.addEventListener('mouseover', (e) => e.target.classList.add('etch'));
    
        // container.appendChild(document.createElement("div")).className = 'etch'; // one liner
    }
    
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // change CSS grid property inside container to base number of columns
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`; // change CSS grid property inside container to base number of rows.
}

function clearGrid() {
    // for clearing the colored parts of the grid ONLY
    // const grid = document.querySelectorAll('.etch'); // returns a NodeList, not an array. forEach is defined to work on NodeList.
    // grid.forEach(cell => {
    //     cell.classList.remove('etch');  // remove class .etch from element
    // });
    // note tht getElementsByClassName and querySelectorAll return two different objects
    // getElementsByClassName returns an array
    // querySelectorAll returns a NodeList which has a set of methods which operate on it

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

makeGrid();

const reset = document.querySelector('#reset');
reset.addEventListener('click', (e) => {clearGrid()} );
// reset.addEventListener('click', (e) => {
//     const grid = document.querySelectorAll('.hover');
//     grid.forEach(cell => {
//         cell.classList.remove('hover');
//     });
// });