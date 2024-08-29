let cells = document.querySelectorAll(".cell");
let resetButton = document.querySelector("#reset-button");
let message = document.querySelector("#msg");
let newGame = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container")

let turnX = true; // playerX , playerY

const winningPattern = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]; // 2D array

cells.forEach((cell)=>{
    cell.addEventListener("click", ()=>{
        if(turnX){
            cell.innerText = "X";
            turnX = false;
        }else{
            cell.innerText = "Y";
            turnX = true;
        }
        cell.disabled = true;

        checkWinner();
    });
});

const checkWinner = ()=>{
    for(let pattern of winningPattern){
        let position1 = cells[pattern[0]].innerText;
        let position2 = cells[pattern[1]].innerText;
        let position3 = cells[pattern[2]].innerText;

        if (position1 != "" && position2 != "" && position3!= ""){
            if (position1 == position2 && position2 == position3){
                // alert("Winner", position1);
                // console.log("Winner", position1);
                showWinner(position1);
            }
        }
    }
}

showWinner = (winner)=>{
    message.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableCells();
}

const disableCells = ()=>{
    for(let cell of cells){
        cell.disabled = true;
    }
}

const enableCells = ()=>{
    for(let cell of cells){
        cell.disabled = false;
        cell.innerText = "";
    }
}

const resetGame = () =>{
    turnX = true;
    enableCells();
    msgContainer.classList.add("hide");
}

newGame.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);


