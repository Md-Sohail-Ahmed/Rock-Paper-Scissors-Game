let choices=document.querySelectorAll(".choice");
let p=document.querySelector("p");
let score1=document.querySelector("#you");
let score2=document.querySelector("#comp");

let userChoice;
let compChoice;
let you=0;
let comp=0;

choices.forEach(choice => {
    choice.addEventListener('click', userChoices);
});


function compChoices(){
    let choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * choices.length);
    compChoice= choices[random];   
}


function userChoices(){
    userChoice = this.getAttribute("id");
    compChoices();
    results();
}


function results(){
    if(userChoice === compChoice){
        p.innerText = "It's a tie!";
    }
    if(userChoice=="paper"&&compChoice=="rock"){
        you++;
        p.innerText = `Paper covers ${compChoice}, you win!`;
    }
    else if(userChoice=="rock"&&compChoice=="paper"){
        comp++;
        p.innerText = `${compChoice} covers rock , you lose!`;
    }

     if(userChoice=="scissors"&&compChoice=="paper"){
        you++;
        p.innerText = `Scissors cuts ${compChoice}, you win!`;
    }
    else if(userChoice=="paper"&&compChoice=="scissors"){
        comp++;
        p.innerText = `${compChoice} cuts paper  , you lose!`;
    }
     if(userChoice=="rock"&&compChoice=="scissors"){
        you++;
        p.innerText = `Rock smashes ${compChoice}, you win!`;
    }
    else if(userChoice=="scissors"&&compChoice=="rock"){
        comp++;
        p.innerText = `${compChoice}  smashes scissors , you lose!`;
    }
    score1.innerText="You : "+you;
    score2.innerText="Computer : "+comp;
}


