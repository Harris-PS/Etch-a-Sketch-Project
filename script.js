function createGrid(size){
  const container = document.getElementById('container');
  container.textContent = "Etch-A-Sketch";

  const gridsizebtn = document.createElement('button');
  gridsizebtn.textContent = "Change Grid Size";
  container.appendChild(gridsizebtn);

  function gridsize(){
    let gridsize = prompt("Enter grid size between 3 to 100");

    gridsize = parseInt(gridsize);

    container.textContent = "";

    createGrid(gridsize);
  }

  gridsizebtn.addEventListener('click', gridsize);


  for(let i=0;i<size;i++){
    let row = document.createElement('div');
    row.className = "row";
    container.appendChild(row);


  for(let j=0;j<size;j++){  
      let cell = document.createElement("div");
      cell.className = "cell";
      row.appendChild(cell);
      cell.addEventListener('mouseover', () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        cell.style.backgroundColor = `rgb(${r},${g},${b})`;
      }); 
    }
  }
}


createGrid(16);