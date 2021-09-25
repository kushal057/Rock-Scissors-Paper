const playerRock = document.body.querySelectorAll("button")[0];
const playerPaper = document.body.querySelectorAll("button")[1];
const playerScissors = document.body.querySelectorAll("button")[2];
const comScissors = document.body.querySelectorAll("button")[3];
const comPaper = document.body.querySelectorAll("button")[4];
const comRock = document.body.querySelectorAll("button")[5];

let playerScore = document.querySelectorAll(".number")[0];
let comScore = document.querySelectorAll(".number")[1];
function random() {
    const randomIndex = Math.floor(Math.random() * 3);
    return randomIndex;
}

function rules(player, com) {
    if(player == 0 && com == 0 || player == 1 && com == 2 || player == 2 && com == 1 ) {
        return "player";
    } else if(player == com) {
        return "both";
    } else {
        return "com";
    }
}

function select(e) {
    console.log(e);
    e.style.border = "1.7px solid white";
    const player = [];
    let playerIndex;
    for(i=0;i<3;i++) {
        player[i] = document.querySelectorAll("button")[i];
        if(player[i] == e.target) {
            playerIndex = i;
        }
    }
    const com = [];
    for(i=5;i>2;i--) {
        com[i] = document.querySelectorAll("button")[i];
    }
    console.log(playerIndex);
    let comIndex = random();
    com[comIndex].style.border = "1.7px solid white";

    switch(rules(playerIndex, comIndex)) {
        case "player":
           let score = Number(playerScore.textContent);
           score++;
           playerScore.textContent = score;
            break;
        case "both":
            let pScore = Number(playerScore.textContent);
            pScore++;
            playerScore.textContent = pScore;
            let cScore = Number(comScore.textContent);
            cScore++;
            comScore.textContent = cScore;
            break;
        case "com":
            cScore++;
            comScore.textContent = cScore;
    }
}

playerRock.addEventListener("click",select);
playerScissors.addEventListener("click",select);
playerPaper.addEventListener("click",select);
