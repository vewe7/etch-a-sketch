let size = 16;

const grid = document.querySelector('.grid');

for (let i = 0; i < size; i++)
{
    let col = document.createElement('div');
    col.classList.add('column');
    grid.appendChild(col);

    for (let j = 0; j < size; j++)
    {
        let square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', () =>  {
            square.classList.add('black');
        });
        col.appendChild(square);
    }
}