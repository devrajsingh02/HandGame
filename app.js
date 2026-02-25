let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");

const getcompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const rendindex = Math.floor(Math.random() * 3);
    return options[rendindex];
}

const drawgame = () => {
    console.log("game was draw.")
}

const compWin=()=>{
    console.log("computer win the game");
}

const userWin=()=>{
    console.log("you win the game");
}

const playgame = (userchoice) => {
    let compchoice = getcompchoice();

    console.log("users choice=", userchoice);
    console.log("computers choice=", compchoice);


    if (userchoice === compchoice) {
        drawgame();
    }

    else if(userchoice=="rock" && compchoice=="paper" || userchoice=="paper" && compchoice=="scissor" || userchoice=="scissor" && compchoice=="rock"){
        compWin();
    }

    else{
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

