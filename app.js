let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const userScorePara = document.querySelector("#you");
const compScorePara = document.querySelector("#comp");
const resetButton = document.querySelector("#reset");


const gencompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options [randomIdx];
}

const playGame = (userChoice) => {
     const compChoice = gencompChoice();

     if (userChoice === compChoice) {
        //draw game
      
       drawGame(); }

        else  {
        let userWin = true;

        if (userChoice == "rock") {                          // scissors, paper
        userWin = compChoice === "paper" ? false: true;
        }

         else if (userChoice == "paper") {                  // rock, scissors
        userWin = compChoice == "scissors" ? false : true;
        } 

         else {                                            // rock, paper
        userWin = compChoice === "rock" ? false : true}

        showWinner (userWin, userChoice, compChoice);
     } 
};

const drawGame = () => {
    message.innerText = "Game is draw. Play again!!";
    message.style.backgroundColor = "#dda15e";
}


const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        message.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor = "#2adb30";
    } else {
        compScore++ ;
        compScorePara.innerText = compScore;
        message.innerText = `You lose. ${userChoice} beats your ${compChoice}`;
        message.style.backgroundColor = "#cc0e0e";
    }

}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


const resetGame = () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    message.innerText = "Let's play again!";
    message.style.backgroundColor = "#023047";
};

resetButton.addEventListener("click", resetGame);