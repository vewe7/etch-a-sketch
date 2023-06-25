const initSize = 16;
const grid = document.querySelector('.grid');

function generateGrid(size) {
    for (let i = 0; i < size; i++) {
        let col = document.createElement('div');
        col.classList.add('column');
        grid.appendChild(col);

        for (let j = 0; j < size; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
            col.appendChild(square);
            square.addEventListener('mouseover', () =>  {
                square.classList.add('black');
            });
        }
    }
}

function destroyGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

function resizeInput() {
    let input = prompt("Enter a new grid width (max: 100).");
    input = parseInt(input);

    if (input >= 1 && input <= 101)
    {
        destroyGrid();
        generateGrid(input);
    }
}

generateGrid(initSize);

