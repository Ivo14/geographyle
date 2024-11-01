let arr = [];
localStorage.streak = 0;
let fails = 0;
let NewGameButton = document.getElementById('NewGameButton');
let wrongAnswers='';
let wrongAnswersDiv = document.getElementById('wrongAnswers');
let GuessInputButton = document.getElementById('GuessInputButton');
let Message = document.getElementById('Message');
let GuessInput = document.getElementById('GuessInput');
let text = document.getElementById('text');

let gameEnded = false;
let answer;
let wintexts;

fetch('/data/languages.json')
  .then(response => response.json()) 
  .then(data => {
     arr = data;
    const datalist = document.getElementById("languages");
    arr.forEach(country => {
      const option = document.createElement("option");
      option.value = country.name;
      datalist.appendChild(option);
    });
    newgame();
})
let newgame = () =>{
    GuessInput.value='';
    fails=0;
    wrongAnswers='Wrong answers: ';
Message.innerText="What's this language?";
GuessInputButton.style.display='inline'
wrongAnswersDiv.innerText=''
 gameEnded = false;
 Message.classList.remove('strokemegreen');
 Message.classList.remove('strokemered');
NewGameButton.style.display = 'none';
let chooseLang = Math.floor(Math.random() * arr.length);
let chooseText = Math.floor(Math.random() * arr[chooseLang].texts.length);
text.innerText = arr[chooseLang].texts[chooseText];
answer = arr[chooseLang].name;
 wintexts = [ `You win! It was indeed ${answer}`, `Wow, you must be fluent in ${answer} or something! Good job!`, `It's obviously ${answer}, I don't know how you didn't get it earlier...`]
losetexts = [`You lost, maybe try studying ${answer} sometime?`,`Unfortunately you didn't get it, it was ${answer}`,`${answer} is such a hard language it made you lose this one`,`Better luck next time, though make sure you study some ${answer} before then`,`${answer} is not your friend, huh? You lost by the way just so you know.`]
let l=document.getElementById('languages');
for(let i =0;i<arr.length;i++){
  l.options[i].value=arr[i].name;
}
}




let win = () => {
    localStorage.streak++;
    Message.innerText = wintexts[Math.floor(Math.random() * wintexts.length)] + `\nStreak: ${localStorage.streak}`
    Message.classList.add('strokemegreen');
    Message.classList.remove('strokemered');
    gameEnded = true; 
    GuessInputButton.style.display = 'none';
    NewGameButton.style.display = 'inline';
}

let lose = () => {
    Message.innerText = losetexts[Math.floor(Math.random() * wintexts.length)] + `\nStreak: ${localStorage.streak} → 0`
    Message.classList.add('strokemered');
    Message.classList.remove('strokemegreen');
    gameEnded = true; 
    GuessInputButton.style.display = 'none';
    NewGameButton.style.display = 'inline';
    localStorage.streak=0;
}

let checker = () => {
    let Guess = GuessInput.value.toLowerCase()
    if (Guess == (answer).toLowerCase()) win()
        else {
            wrongAnswers+=Guess+' ';
            wrongAnswersDiv.innerText=wrongAnswers;
            fails++;
        }
    if(fails>2) {
        lose();
    }
}

document.getElementById('a').addEventListener("keydown", (k) => {
    if (k.key === 'Enter') {
      if(!gameEnded) checker();
    }
  });

  document.getElementById('a').addEventListener("keydown", (k) => {
    if (k.key === ' ') {
      if(gameEnded) newgame();
    }
  });

NewGameButton.onclick = () =>{
    newgame();
}


GuessInputButton.onclick = () => { checker() }
