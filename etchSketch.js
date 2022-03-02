/*
2 x 2
3 x 3
*/
const base = 25
const boxes = base ** 2;
const container = document.querySelector('#container'); // select element with id=container
for(let i=0; i<boxes; i++) {
    const child = container.appendChild(document.createElement("div")); // append child div to container element, appendChild reference saved in variable child
    child.className = 'etch'; // assign class name 'etch' to child reference element
    // container.appendChild(document.createElement("div")).className = 'etch';
}

container.style.gridTemplateColumns = `repeat(${base}, 1fr)`;
container.style.gridTemplateRows = `repeat(${base}, 1fr)`;
// container.setAttribute('style', 'display: flex; grid-template-columns: repeat(2, 1fr)');
// container.setProperty('grid-template-columns', 'repeat(2, 1fr)');

