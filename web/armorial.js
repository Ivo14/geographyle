let FlagIMG = document.getElementById('armorial')
let GuessInputDiv = document.getElementById('GuessInput')
let GuessInputButtonDiv = document.getElementById('GuessInputButton')
let wrongGuessesDiv = document.getElementById('wrongGuesses')
let MessageDiv = document.getElementById('Message')
let ListDiv = document.getElementById('list')
let giveupButton = document.getElementById('giveup')
let NewGameButton = document.getElementById('NewGameButton')
let numberOfGuesses = 0;
localStorage.streak = 0;
let country;
let arr = [];
fetch('/data/countries.json')
  .then(response => response.json()) 
  .then(data => {
     arr = data;
     const datalist = document.getElementById("countries");
    arr.forEach(country => {
      const option = document.createElement("option");
      option.value = country.name;
      datalist.appendChild(option);
    });
    newgame();
})
let newgame = () => {
  MessageDiv.innerText='';
  GuessInput.value='';
    wrongGuessesDiv.innerText = '';
    document.getElementById('temp').style.display='';
    GuessInputButtonDiv.style.display='inline'
    GuessInputDiv.style.display='';
    giveupButton.style.display='inline';
NewGameButton.style.display = 'none';
  numberOfGuesses = 0;
 country = arr[Math.floor(Math.random() * arr.length)]
FlagIMG.innerHTML = `<img src='${country.armorial}' width="500" height="500" draggable="false" style="pointer-events: none; user-select: none;"/>`
numberOfGuesses = 0;
}

Win = () => {
  localStorage.streak++;
  MessageDiv.style='color: green'
  document.getElementById('temp').style.display='none';
  if (numberOfGuesses == 1) {  MessageDiv.innerText = `You won in ${numberOfGuesses} guess, the country was indeed ${country.name}. Streak: ${localStorage.streak}`; GuessInputButtonDiv.style.display = 'none'}
  else { MessageDiv.innerText = `You won in ${numberOfGuesses} guesses, the country was indeed ${country.name}. Streak: ${localStorage.streak}`; }
  GuessInputButtonDiv.style.display = 'none'
  giveupButton.style.display = 'none'
  GuessInputDiv.style.display='none'
  NewGameButton.style.display='';
}

let checker = () => {
  numberOfGuesses++
  let Guess = GuessInputDiv.value.toLowerCase()
  if (Guess == (country.name).toLowerCase()) Win()
  else {
    if (numberOfGuesses == 1) { wrongGuessesDiv.innerText = `Wrong guesses: ${GuessInputDiv.value}` }
    else { wrongGuessesDiv.innerText += `, ${GuessInputDiv.value}` }
  }
  GuessInput.value='';
}
GuessInputButtonDiv.onclick = () => { checker() }
giveupButton.onclick = () => { document.getElementById('temp').style.display='none';NewGameButton.style.display='';MessageDiv.style='color: red';MessageDiv.innerText = `The country was ${country.name}. Streak: ${localStorage.streak} → 0`; localStorage.streak=0;GuessInputButtonDiv.style.display = 'none';giveupButton.style.display='none';GuessInputDiv.style.display='none'}

GuessInput.addEventListener("keydown", (k) => {
  if (k.keyCode == 13 && MessageDiv.innerText == ``) { checker() }
})


NewGameButton.onclick = () =>{
  newgame();
}

GuessInputDiv.addEventListener("keydown", (k) => {
  if (k.keyCode == 32 && NewGameButton.style.display == '') {NewGameButton.style.display = 'none';setTimeout(newgame, 1000);}
})
document.addEventListener("keydown", (k) => {
  if (k.keyCode == 32 && NewGameButton.style.display == '') {NewGameButton.style.display = 'none';setTimeout(newgame, 1000);}
})
