const gridContainer = document.getElementById('grid-container');
const restart = document.getElementById('restart');

restart.addEventListener('click', () => {
  let columns = 0;
  while (columns < 1 || columns > 100) {
    columns = prompt("Please enter a positive number up to 100");
  }
  drawGrid(columns);
});

function drawGrid(columns) {
  gridContainer.innerHTML = '';
  let dimension = 700 / columns;
  for (i = 1; i <= columns**2; i++) {
    let square = document.createElement('div');
    square.style.width = `${dimension}px`;
    square.style.height = `${dimension}px`;
    square.classList.add('grid-square');
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    });
    square.addEventListener('mouseout', () => {
      square.style.backgroundColor = '';
    })
    gridContainer.appendChild(square);
  }
}
