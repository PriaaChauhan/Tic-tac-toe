console.log("Welcome to Tic Tac Toe");
let turn = "X";
let gameOver = false;
let restart = document.getElementById("start");

//Function to chnage the TURN
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

//Functionto check for a win

const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if (((boxtext[e[0]]).innerText === (boxtext[e[1]]).innerText) && ((boxtext[e[2]]).innerText === (boxtext[e[1]]).innerText) && ((boxtext[e[0]]).innerText !== "")) {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
            gameOver = true;
            document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "150px";
        }
    })
}

//GAME LOGIC
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', () => {
        if (boxtext.innerText === "") {
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!gameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    }) 
})

//adding onclick event listener on restart button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn  = "X";
    gameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "0px";
})