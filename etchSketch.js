
const base = 100; // number of cells per side
const numCells = base ** 2;  // size of grid -- number of cells in the grid
const container = document.querySelector('#container'); // select element with id=container

// create numCells of child divs and append to container
// give each new div class 'etch'
// add a mouseover event listener to each new div and assign another class when event occurs
for(let i=0; i<numCells; i++) {
    const cell = container.appendChild(document.createElement("div")); // append child div to container element, appendChild reference saved in variable child
    cell.className = 'etch'; // assign class name 'etch' to child reference element
    cell.addEventListener('mouseover', (e) => e.target.classList.add('hover'));

    // container.appendChild(document.createElement("div")).className = 'etch'; // one liner
}

container.style.gridTemplateColumns = `repeat(${base}, 1fr)`; // change CSS grid property inside container to base number of columns
container.style.gridTemplateRows = `repeat(${base}, 1fr)`; // change CSS grid property inside container to base number of rows.
