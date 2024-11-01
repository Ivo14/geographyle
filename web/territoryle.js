let FlagIMG = document.getElementById('flag')
let CapitalDiv = document.getElementById('capital')
let GuessInputDiv = document.getElementById('GuessInput')
let GuessInputButtonDiv = document.getElementById('GuessInputButton')
let wrongGuessesDiv = document.getElementById('wrongGuesses')
let MessageDiv = document.getElementById('Message')
let ListDiv = document.getElementById('list')
let giveupButton = document.getElementById('giveup')
let NewGameButton = document.getElementById('NewGameButton')
let numberOfGuesses = 0;
let territory;
let arr = [];
fetch('/data/territories.json')
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
 territory = arr[Math.floor(Math.random() * arr.length)]
//territory.flag = `https://flagsapi.com/${territory.code.toUpperCase()}/shiny/64.png`
//territory.flag = `https://countryflagsapi.com/png/${territory.code}`
//FlagIMG.style.display='none'

//FlagIMG.innerHTML = `<img src = https://countryflagsapi.com/png/${territory.code} height=50 width=50>`
//https://flagsapi.com/BE/shiny/64.png
FlagIMG.innerHTML = `<img src = https://flagsapi.com/${territory.code}/flat/64.png height=100 width=100>`
if (territory.capital == '') CapitalDiv.innerText = `This territory does not have a capital.`
else CapitalDiv.innerText = `Capital: ${territory.capital}`
numberOfGuesses = 0;
}

Win = () => {
  MessageDiv.style='color: green'
  document.getElementById('temp').style.display='none';
  if (numberOfGuesses == 1) {  MessageDiv.innerText = `You won in ${numberOfGuesses} guess, the territory was indeed ${territory.name}.`; GuessInputButtonDiv.style.display = 'none'}
  else { MessageDiv.innerText = `You won in ${numberOfGuesses} guesses, the territory was indeed ${territory.name}.`; }
  GuessInputButtonDiv.style.display = 'none'
  giveupButton.style.display = 'none'
  GuessInputDiv.style.display='none'
  NewGameButton.style.display='';

}

let checker = () => {
  numberOfGuesses++
  let Guess = GuessInputDiv.value.toLowerCase()
  if (Guess == (territory.name).toLowerCase()) Win()
  else {
    if (numberOfGuesses == 1) { wrongGuessesDiv.innerText = `Wrong guesses: ${GuessInputDiv.value}` }
    else { wrongGuessesDiv.innerText += `, ${GuessInputDiv.value}` }
  }
  GuessInput.value='';
}
GuessInputButtonDiv.onclick = () => { checker() }
giveupButton.onclick = () => { document.getElementById('temp').style.display='none';NewGameButton.style.display='';MessageDiv.style='color: red';MessageDiv.innerText = `The territory was ${territory.name}.`; GuessInputButtonDiv.style.display = 'none';giveupButton.style.display='none';GuessInputDiv.style.display='none'}

GuessInput.addEventListener("keydown", (k) => {
  if (k.keyCode == 13 && MessageDiv.innerText == ``) { checker() }
})


NewGameButton.onclick = () =>{
  newgame();
}