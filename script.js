let player = document.querySelector("#playerIcon");
let computer = document.querySelector("#computerIcon");
let icons = document.querySelector(".icons");
let info = document.querySelector("#info");
let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");
let buttons = document.querySelectorAll("button");

const options = ['rock', 'paper', 'scissors'];

function play(index) {
    buttons.forEach(button => button.setAttribute("disabled", "")); // buttons disabled
    icons.style.animation = "shake 2s ease"; // add shake animation
    window.setTimeout(changeMove, 2000, index); // timer for shake
}

function changeMove(index) {

    icons.style.animation = ""; // remove shake animation

    // player move
    player.classList.remove(player.classList.item(2));
    let playerMove = options[index];
    player.classList.add('fa-hand-'+playerMove);

    // random computer move
    computer.classList.remove(computer.classList.item(2));
    let computerMove = options[Math.floor(Math.random() * 3)];
    computer.classList.add('fa-hand-'+computerMove);

    winner(playerMove, computerMove); // who is the winner
    buttons.forEach(button => button.removeAttribute("disabled")); // buttons enabled
}

function winner(playerMove, computerMove) { // all possibilities
    if(playerMove == computerMove)
        info.textContent = "Draw";
    else if(playerMove == 'rock' && computerMove == 'scissors') {
        info.textContent = "Win";
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    }
    else if(playerMove == 'paper' && computerMove == 'rock') {
        info.textContent = "Win";
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    }
    else if(playerMove == 'scissors' && computerMove == 'paper') {
        info.textContent = "Win";
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    }
    else {
        info.textContent = "Lose";
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }
}