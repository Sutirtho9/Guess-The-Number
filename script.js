let RandNom = Math.random()*100+1;

RandNom =Math.round(RandNom);

const submit = document.querySelector('.sub-btn');
const guess_cont = document.querySelector('.guess-val');
const result = document.querySelector('.result')
const remGuess = document.querySelector('.remGuess');

let TotalGuess =10;
remGuess.innerHTML= TotalGuess;
let prevGuess=0;
let gameOver = false;

const handleGuess = () => {
    if (gameOver) return;

    const guess = guess_cont.value;
    console.log(guess);
    console.log(RandNom);
    TotalGuess--;
    checkGuess(guess);
    UpdateGuess();
    guess_cont.value = '';
};

// Handle click
submit.addEventListener('click', handleGuess);

// Handle Enter key press
guess_cont.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        handleGuess();
    }
});


function UpdateGuess(){
    remGuess.innerHTML= TotalGuess;
    const PrevGuess = document.querySelector('.prevGuess');
    prevGuess = guess_cont.value;
    PrevGuess.innerHTML= prevGuess;
}


//Check Guess
function checkGuess(guess){
    if(Number(guess) === RandNom){
        Win();
    }
    else{
        if(TotalGuess===0){
            Lose();
        }
        else{
            result.innerText="No Match Try Again!"
        }
    }
}

const div = document.querySelector('.result-cont');
const re_btn = document.createElement("button");
   
//Win Game

function Win(){
    result.innerText="You Win!";
    console.log('Win');
    result.classList.add("winner");
    const re_btn = document.createElement("button");
    re_btn.textContent="Replay";
    re_btn.classList.add("re-btn");
    div.appendChild(re_btn);
    gameOver = true;
}

//Lose Game

function Lose(){
    result.innerText="You Lose!";
    result.classList.add("loss");
    re_btn.classList.add("re-btn");
    re_btn.textContent="Retry";
    div.appendChild(re_btn);
    gameOver=true;
}

re_btn.addEventListener('click', () => {

    TotalGuess = 10;
    RandNom = Math.round(Math.random() * 100 + 1);
    gameOver = false;
    prevGuess = 0;

    
    guess_cont.value = '';
    result.innerText = '';
    result.classList.remove('winner', 'loss');

    UpdateGuess();

    if (re_btn.parentNode) {
        re_btn.parentNode.removeChild(re_btn);
    }
});