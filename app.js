const screen = document.getElementById("screen");

let sizeSlider = document.getElementById("sizeSlider");
let size = document.getElementById("size");

let colorPicker = document.getElementById("colorPicker");
let color = "red";
let randomColor=false;
let isDrawing = false;
// creating grid
function createGrid() {
    screen.innerHTML = "";
    let gridSize = Number(sizeSlider.value);
    let cellNo = gridSize * gridSize;
    screen.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    for (let i = 0; i < cellNo; i++) {
        let newCell = document.createElement("div");
        newCell.classList.add("cell");
        screen.appendChild(newCell);
        newCell.addEventListener("mousedown", function() {
            isDrawing = true;
            newCell.style.backgroundColor = color;
        });

        newCell.addEventListener("mouseover", function() {
            if (isDrawing) {
                if(!randomColor){
                    newCell.style.backgroundColor = color;
                }
                else{
                    newCell.style.backgroundColor=random();
                }
            }
        });

        newCell.addEventListener("mouseup", function() {
            isDrawing = false;
        });
    }
}
sizeSlider.addEventListener("input", function() {
    size.textContent = sizeSlider.value;
    createGrid();

});
colorPicker.addEventListener("input", function() {
    color = colorPicker.value;
    randomColor=false;
});
const eraser=document.getElementById("eraser");
eraser.addEventListener("click",function(){
    color="white";
})
const clearScreen=document.getElementById("clear");
clearScreen.addEventListener("click",function(){
    createGrid();
})
function random(){
    let rand1=Math.floor(Math.random()*256);
    let rand2=Math.floor(Math.random()*256);
    let rand3=Math.floor(Math.random()*256);
    return `rgb(${rand1},${rand2},${rand3})`;
}
const randomButton=document.getElementById("random");
randomButton.addEventListener("click",function(){
    randomColor=true;
})
createGrid();