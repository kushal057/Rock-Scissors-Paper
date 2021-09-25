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
  if (
    (player == 0 && com == 0) ||
    (player == 1 && com == 2) ||
    (player == 2 && com == 1)
  ) {
    return "player";
  } else if ((player == 0 && com == 1) || (player == 1 && com == 0) || (player == 2 && com == 2)) {
    return "com";
  } else {
    return "both";
  }
}

function select() {
  const player = [playerRock, playerPaper, playerScissors];
  console.log(player);
  for(i = 0; i < player.length; i++) {
      let playerIndex = i;
    player[i].addEventListener("click", function (e) {
        for(i=0; i<document.querySelectorAll("button").length; i++) {
            document.querySelectorAll("button")[i].style.background = "#efe6dd"
        }
        e.currentTarget.style.background = "#7ebdc2";
        const com = [comScissors, comPaper, comRock];
        let comIndex = random();
        com[comIndex].style.background = "#F3DFA2";
        console.log(com[comIndex]);
  
        switch (rules(playerIndex, comIndex)) {
          case "player":
            playerScore.textContent =  Number(playerScore.textContent) + 1;
            break;
          case "both":
            playerScore.textContent =  Number(playerScore.textContent) + 1;
            comScore.textContent = Number(comScore.textContent) + 1;
            break;
          case "com":
            comScore.textContent = Number(comScore.textContent) + 1;
            break;
        }
      });
  }
}

select();
