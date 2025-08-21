 let userScore = 0;
 let compScore = 0;

 const choices = document.querySelectorAll(".choice");
 const message = document.querySelector("#msg");
 const compScoreUpdate = document.querySelector("#computer-score");
 const myScoreUpdate = document.querySelector("#my-score");
 const newgame = document.querySelector(".newgame-container");

 const newGameButton = document.querySelector("#new-game");


  const genarateCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const ramdomIdx = Math.floor(Math.random() * 3)
    return options[ramdomIdx];
 }

 const showWinner = (userwin, userChoice, compChoice) =>{
    if(userwin){
        userScore++;
        myScoreUpdate.innerText = userScore;
        message.innerText = `You win! Your ${userChoice} beats Computer's${compChoice}`;
        message.style.backgroundColor = "green";
        newgame.classList.remove("hide");

    } else{
        compScore++;
        compScoreUpdate.innerText = compScore;
        message.innerText = `You lost! Computer's ${compChoice} beats your ${userChoice}`;
        message.style.backgroundColor = "red";
        newgame.classList.remove("hide");
    }
 }


 const drawGame =  () =>{
    console.log("Draw game!");
    message.innerText = "Game drawn, Play Again!"
    message.style.backgroundColor = "#ff6b00";
 };

 const playgame = (userChoice) =>{
    console.log("user choice is", userChoice);
    const compChoice = genarateCompChoice();
    console.log("computer choice is" , compChoice)

    if (userChoice === compChoice){
        console.log("game is draw");
        drawGame()
    }else {
        let userWin = true
        if (userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            //rock,scissosrs
           userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
 };

 
 newGameButton.addEventListener("click", ()=>{
 myScoreUpdate.innerText = 0;
 userScore = 0;
 compScoreUpdate.innerText = 0;
 compScore = 0;
 message.innerText = "Play your move";
 message.style.color = "#cbff49";
 message.style.backgroundColor  = "#ff6b00"
 newgame.classList.add("hide");

 })


 choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click" ,()=>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
 });