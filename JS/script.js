let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGame = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container ");
let msg = document.querySelector("#msg")

let turn0 = true;
const arr = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [6,7,8],
    [2,4,6],
    [0,4,8],
]

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        } else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const checkWinner = () =>{
    for(let patt of arr){
        let pos1val = boxes[patt[0]].innerText;
        let pos2val = boxes[patt[1]].innerText;
        let pos3val = boxes[patt[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
        }
    }
}

const showWinner = (winner) => {

    msg.innerText = `🎉🎉WINNER🎉🎉 IS   ${winner} `;
    msgContainer.classList.remove("hide");
    newGame.classList.remove("hide");
    disableBoxes();
}

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    newGame.classList.add("hide");
}

const disableBoxes = () => {
    for(box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

newGame.addEventListener("click", resetGame);
resetbtn.addEventListener("click",resetGame);