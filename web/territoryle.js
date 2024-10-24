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
let arr = [
  { "name": "Aland Islands", "code": "AX", "capital": "Mariehamn" },
  { "name": "American Samoa", "code": "AS", "capital": "Pago Pago" },
  { "name": "Anguilla", "code": "AI", "capital": "The Valley" },
  { "name": "Antarctica", "code": "AQ", "capital": "Antarctica" },
  { "name": "Aruba", "code": "AW", "capital": "Oranjestad" },
  { "name": "Bermuda", "code": "BM", "capital": "Hamilton" },
  { "name": "Cayman Islands", "code": "KY", "capital": "George Town" },
  { "name": "Christmas Island", "code": "CX", "capital": "Flying Fish Cove" },
  { "name": "Cocos Islands", "code": "CC", "capital": "West Island" },
  { "name": "Cook Islands", "code": "CK", "capital": "Avarua" },
  { "name": "Curacao", "code": "CW", "capital": "Willemstad" },
  { "name": "Falkland Islands", "code": "FK", "capital": "Stanley" },
  { "name": "Faroe Islands", "code": "FO", "capital": "Torshavn" },
  { "name": "French Polynesia", "code": "PF", "capital": "Papeete" },
  { "name": "French Southern Territories", "code": "TF", "capital": "Port-aux-Francais" },
  { "name": "Gibraltar", "code": "GI", "capital": "Gibraltar" },
  { "name": "Greenland", "code": "GL", "capital": "Nuuk" },
  { "name": "Guam", "code": "GU", "capital": "Hagatna" },
  { "name": "Guernsey", "code": "GG", "capital": "St Peter Port" },
  { "name": "Hong Kong", "code": "HK", "capital": "Hong Kong" },
  { "name": "Isle of Man", "code": "IM", "capital": "Douglas" },
  { "name": "Jersey", "code": "JE", "capital": "Saint Helier" },
  { "name": "Macao", "code": "MO", "capital": "Macao" },
  { "name": "Martinique", "code": "MQ", "capital": "Fort-de-France" },
  { "name": "Mayotte", "code": "YT", "capital": "Mamoudzou" },
  { "name": "Montserrat", "code": "MS", "capital": "Plymouth" },
  { "name": "New Caledonia", "code": "NC", "capital": "Noumea" },
  { "name": "Niue", "code": "NU", "capital": "Alofi" },
  { "name": "Norfolk Island", "code": "NF", "capital": "Kingston" },
  { "name": "Northern Mariana Islands", "code": "MP", "capital": "Saipan" },
  { "name": "Pitcairn", "code": "PN", "capital": "Adamstown" },
  { "name": "Puerto Rico", "code": "PR", "capital": "San Juan" },
  { "name": "Reunion", "code": "RE", "capital": "Saint-Denis" },
  { "name": "Saint Helena", "code": "SH", "capital": "Jamestown" },
  { "name": "Saint Martin", "code": "MF", "capital": "Marigot" },
  { "name": "South Georgia and the South Sandwich Islands", "code": "GS", "capital": "Grytviken" },
  { "name": "Tokelau", "code": "TK", "capital": "" },
  { "name": "Turks and Caicos Islands", "code": "TC", "capital": "Cockburn Town" },
  { "name": "British Virgin Islands", "code": "VG", "capital": "Road Town" },
  { "name": "US Virgin Islands", "code": "VI", "capital": "Charlotte Amalie" },
  { "name": "Wallis and Futuna", "code": "WF", "capital": "Mata Utu" },
  { "name": "Western Sahara", "code": "EH", "capital": "El-Aaiun" }
];
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
newgame();
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
let l=document.getElementById('countries')
for (let i =0;i<arr.length;i++) l.options[i].value=arr[i].name


var dropdown = document.querySelectorAll(".dropdown");
for (var i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
  });
}

NewGameButton.onclick = () =>{
  newgame();
}