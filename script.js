const container = document.getElementById('container');
container.textContent = "Etch-A-Sketch";

// creating the 16x16 grid
function createGrid(size){
  
  
  for(let i=0;i<size;i++){
    let row = document.createElement('div');
    row.className = "row";
    container.appendChild(row);
  

  for(let j=0;j<size;j++){  
      let cell = document.createElement("div");
      cell.className = "cell";
      row.appendChild(cell);
    }
   }
  }

createGrid(16);