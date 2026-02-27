let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const yourscore=document.querySelector("#user-score");
const machinescore=document.querySelector("comp-score");

const getcompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const rendindex = Math.floor(Math.random() * 3);
    return options[rendindex];
}

const drawgame = () => {
    msg.innerText = "Game was draw";
}

const compWin = () => {
    msg.innerText = "Comp win the Game";
    compscore++;
    machinescore.innerText=compscore;
}

const userWin = () => {
    msg.innerText = "You win the Game";
    userscore++;
    yourscore.innerText=userscore;
}

const playgame = (userchoice) => {
    let compchoice = getcompchoice();

    console.log("users choice=", userchoice);
    console.log("computers choice=", compchoice);


    if (userchoice === compchoice) {
        drawgame();
        return;
    }

    else if ((userchoice == "rock" && compchoice == "paper") || (userchoice == "paper" && compchoice == "scissor") || (userchoice == "scissor" && compchoice == "rock")) {
        compWin();
    }

    else {
        userWin();
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute("id");
        //console.log("choice was clicked", userchoice);
        playgame(userchoice);
    })
})

