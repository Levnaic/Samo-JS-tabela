//FORMIRANJE TABLE
function createTable() {
  //pravljenje html-a promenjive
  const body = document.querySelector('body');
  const inputContainer = document.createElement('div');
  const inputSection = document.createElement('div');
  const inputSquareRows = document.createElement('input');
  const inputSquareColumns = document.createElement('input');
  const inputBtn = document.createElement('button');

  //formiranje html-a
  body.append(inputContainer);
  body.style.display = 'flex';
  body.style.flexDirection = 'column';
  body.style.alignItems = 'center';
  body.style.gap = '20px';
  inputContainer.appendChild(inputSection);
  inputSection.appendChild(inputSquareRows);
  inputSection.appendChild(inputSquareColumns);
  inputContainer.appendChild(inputBtn);

  inputContainer.style.backgroundColor = 'orange';
  inputContainer.style.border = '1px solid black';
  inputContainer.style.padding = '30px';
  inputContainer.style.display = 'flex';
  inputContainer.style.flexDirection = 'column';
  inputContainer.style.justifyContent = 'center';
  inputContainer.style.alignItems = 'center';
  inputContainer.style.gap = '15px';

  inputSection.style.display = 'flex';
  inputSection.style.gap = '15px';

  function inputStyle(i) {
    i.style.width = '200px';
    i.style.height = '60px';
    i.style.border = 'none';
  }
  inputStyle(inputSquareRows);
  inputStyle(inputSquareColumns);

  inputBtn.style.width = '150px';
  inputBtn.style.height = '35px';
  inputBtn.innerHTML = 'Formiraj tablu';

  inputSquareColumns.placeholder = 'Unesi broj kolona';
  inputSquareRows.placeholder = 'Unesi broj redova';

  inputBtn.addEventListener('click', () => {
    //tableContainer.remove();
    const columnNumber = inputSquareColumns.value;
    const rowNumber = inputSquareRows.value;
    const tableContainer = document.createElement('div');
    tableContainer.style.display = 'flex';
    tableContainer.style.flexWrap = 'wrap';
    tableContainer.style.width = '500px';
    body.append(tableContainer);
    for (let i = 0; i < rowNumber; i++) {
      for (let j = 0; j < columnNumber; j++) {
        const cell = document.createElement('div');
        cell.dataset.row = i;
        cell.dataset.column = j;
        cell.style.aspectRatio = '1';
        cell.style.border = '1px solid black';
        cell.style.flex = `1 0 calc(${100 / columnNumber}% - 2px)`;
        tableContainer.append(cell);
      }
    }
  });
}

//IZVRSAVANJE
createTable();
