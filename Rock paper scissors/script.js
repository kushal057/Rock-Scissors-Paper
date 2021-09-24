const playerRock = document.body.querySelectorAll("button")[0];
const playerPaper = document.body.querySelectorAll("button")[1];
const playerScissors = document.body.querySelectorAll("button")[2];
const comScissors = document.body.querySelectorAll("button")[3];
const comPaper = document.body.querySelectorAll("button")[4];
const comRock = document.body.querySelectorAll("button")[5];

const player = [playerRock,playerPaper,playerScissors];
const com = [comScissors,comPaper,comRock];

let playerScore = document.querySelectorAll(".number")[0].textContent;
let comScore = document.querySelectorAll(".number")[1].textContent;

function random() {
    const randomIndex = Math.floor(Math.random() * 3);
    return randomIndex;
}

function rules(player, com) {
    if(player == 0 && com == 0) {
        return "player";
    }
}

function select(e) {
    e.target.style.border = "1.7px solid white";
    const index = random();
    com[index].style.border = "1.7px solid white";
}

