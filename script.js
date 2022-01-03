const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const userScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.getElementById(".score-board");
const result_div = docment.querySelector(".result");
const rock_div = docment.getElementById("r");
const rock_div = docment.getElementById("p");
const rock_div = docment.getElementById("s");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randamNumber = Math.floor(Math.random()*3);
    return choices[randamNumber];
}

function convertToWord(letter){
    if (letter === "r")return "Rock";
    if (letter === "p")return "Paper";
    return "Scissors";
}

function win(){
    const smallUserWord = "user".font-size;
    const smallUserWord = "comp".font-size;
    const userChoice_div = document.getElementById(userChoice);
    userScore ++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = convertToWord(userChoice) + "beats" + convertToWord(compChoice)+ ".You WIN!!!!!"
}

function lose(){
    const smallUserWord = "user".font-size;
    const smallUserWord = "comp".font-size;
    const userChoice_div = document.getElementById(userChoice);
    userScore ++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = convertToWord(userChoice) + "loses" + convertToWord(compChoice)+ ".You lose!!!!!"
}
function draw(){
    const smallUserWord = "user".font-size;
    const smallUserWord = "comp".font-size;
    const userChoice_div = document.getElementById(userChoice);
    userScore ++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = convertToWord(userChoice) + "draw" + convertToWord(compChoice)+ ".draw!!!!!"
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win (userChpice, computerChoice);
        case "rp":
        case "ps":
        case "sr":
            lose (userChpice, computerChoice);
        case "rr":
        case "pp":
        case "ss":
            draw (userChpice, computerChoice);
    }
}

function main(){
    rock_div.addEventListener('click',()=>game("r"))
    paper_div.addEventListener('click',()=>game("p"))
    scissors_div.addEventListener('click',()=>game("s"))
}

main();
