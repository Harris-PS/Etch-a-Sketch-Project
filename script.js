function createGrid(size){
  const container = document.getElementById('container');
  container.textContent = "Etch-A-Sketch";

  // Function to Change Grid Size
  const gridsizebtn = document.createElement('button');
  gridsizebtn.className = "gridsizebtn";
  gridsizebtn.textContent = "Change Grid Size";
  container.appendChild(gridsizebtn);

  function gridsize(){
    let gridsize = prompt("Enter grid size between 3 to 100");

    gridsize = parseInt(gridsize);

    if(gridsize < 3 || gridsize > 100){
      alert("Please enter a number between 3 to 100");
      return;
    }

    container.textContent = "";

    createGrid(gridsize);
  }
  gridsizebtn.addEventListener('click', gridsize);

  // Function to Reset Grid
  const resetbtn = document.createElement('button');
  resetbtn.className = "resetbtn";
  resetbtn.textContent = "Reset Grid";
  container.appendChild(resetbtn);

  function reset(){
    container.textContent = "";
    createGrid(size);
  }
  resetbtn.addEventListener('click', reset);

  // For loop to Create Grid
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