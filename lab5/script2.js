const cells = document.getElementsByTagName('th');
for (let cell of cells) {
  cell.onclick = () => {
    let selectedColor = document.getElementById('colorBar').value;
    cell.style.backgroundColor = selectedColor;
  }
}

let selectedColumn = -1;

document.getElementById("table").addEventListener("dblclick", function (event) {
  let columnIndex = event.target.cellIndex;

  if (columnIndex !== undefined) {
     selectedColumn = columnIndex;

    // Змінюємо кольори фону стовпців
    changeColumnColors();
  }
});

function changeColumnColors() {
  let table = document.getElementById("table");

  for (let i = 0; i < table.rows.length; i++) {
    for (let j = 0; j < table.rows[i].cells.length; j++) {
      if (j % 2 === selectedColumn % 2) {
        // Міняємо колір для стовпців з однаковими парностями
        let selectedColor = document.getElementById('colorBar').value;
        table.rows[i].cells[j].style.backgroundColor = selectedColor;
      } else {
        // Залишаємо фон для стовпців з різними парностями
        table.rows[i].cells[j].style.backgroundColor = "";
      }
    }
  }
}

const randomCell = document.getElementById('random')
randomCell.addEventListener('mouseover', () => {
  randomCell.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
})
randomCell.addEventListener('mouseout', () => {
  randomCell.style.backgroundColor = 'white';
})