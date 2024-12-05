let DescriptionDiv = document.getElementById('Description')
let CapitalDiv = document.getElementById('capital')
let FlagIMG = document.getElementById('flag')
let maplocationDiv = document.getElementById('maplocation')
let armorialDiv = document.getElementById('armorial')
let GuessInputDiv = document.getElementById('GuessInput')
let GuessInputButtonDiv = document.getElementById('GuessInputButton')
let MessageDiv = document.getElementById('Message')
let NewGameButton = document.getElementById('NewGameButton')
let picDiv = document.getElementById('pic')
let body = document.querySelector('body')

let capitaltxt = 'Capital';
let descriptiontxt = 'Description';
let numberOfGuesses = 0;
if (localStorage.streak == undefined) { localStorage.streak = 0; }
NotWriting = true;
NotWriting2 = true;
gameEnded = false;
let arrcountries = [];
let country = {};
fetch('/data/protocountries.json')
  .then(response => response.json())
  .then(data => {
    arrcountries = data;
    const datalist = document.getElementById("countries");
    arrcountries.forEach(country => {
        
      const option = document.createElement("option");
      option.value = country.name;
      datalist.appendChild(option);
    });
    game1();
  })
let randomwintxtsMain = [];
let randomwintxtsloseMain = [];
let randomwintxts = [{ text: 'You have won, the country was indeed' }, { text: 'You have won, the country really was' }, { text: 'You have won, fortunately for you the country was' }, { text: 'You have won, yep it is' }, { text: 'You have won, it was obviously' }]
let randomwintxtslose = [{ text: 'You have lost, the country was' }, { text: 'You have lost, the country really was' }, { text: 'You have lost, unfortunately for you the country was' }, { text: 'You have lost, it is' }, { text: 'You have lost, it was obviously' }]




      for (let i = 0; i < randomwintxts.length; i++) { randomwintxtsMain[i] = randomwintxts[i]; }
      for (let i = 0; i < randomwintxts.length; i++) { randomwintxtsloseMain[i] = randomwintxtslose[i]; }
      GuessInputButton.innerText = "Guess";
      NewGameButton.innerText = "New game";
      GuessInputDiv.placeholder = "Enter country";
  


     




let game1 = () => {

  country = arrcountries[Math.floor(Math.random() * arrcountries.length)]

  maplocationDiv.innerHTML = `<img src = ${country.maplocation} height = 250px draggable="false" >`
  armorialDiv.innerHTML = `<img src = ${country.armorial} height = 250px draggable="false">`
  FlagIMG.style.display = 'none'
  FlagIMG.innerHTML = `<img src = ${country.flag} draggable="false" class='flag' >`
  maplocationDiv.style.display = 'none'
  armorialDiv.style.display = 'none'
  if (country.picture != undefined) body.style.backgroundImage = `url(${country.picture})`
  else body.style.backgroundImage = `url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp3416336.jpg&f=1&nofb=1&ipt=c360357dde07f57cd9aee85cc2a13e6940e022536c3898d602bfa1da72244bbf&ipo=images)`
}
let game = () => {
  cleanUp();
  country = arrcountries[Math.floor(Math.random() * arrcountries.length)]

  maplocationDiv.innerHTML = `<img src = ${country.maplocation} height = 250px draggable="false">`
  armorialDiv.innerHTML = `<img src = ${country.armorial} height = 250px draggable="false">`
  FlagIMG.style.display = 'none'
  FlagIMG.innerHTML = `<img src = ${country.flag} draggable="false" class='flag' >`
  maplocationDiv.style.display = 'none'
  armorialDiv.style.display = 'none'
  body.style.backgroundImage = `url(${country.picture})`
}
newgamecheck = () => {
  if (NotWriting && NotWriting2) NewGameButton.style = ''
  else setTimeout(newgamecheck, 1000)
}
Win = () => {
MessageDiv.style.display = ''
  localStorage.streak++;
  MessageDiv.classList.add('strokemegreen');
  MessageDiv.classList.remove('strokemered');
  let randomwintext = randomwintxtsMain[Math.floor(Math.random() * randomwintxts.length)]

  gameEnded = true;
  MessageDiv.innerText = `${randomwintext.text} ${country.name}. Streak: ${localStorage.streak}`;
  GuessInputButtonDiv.style.display = 'none';
  for (let i = 0; i < 5; i++) { NewHint() }
  newgamecheck()
}
Lose = () => {
MessageDiv.style.display = ''
  MessageDiv.classList.add('strokemered');
  MessageDiv.classList.remove('strokemegreen');
  let randomwintext = randomwintxtsloseMain[Math.floor(Math.random() * randomwintxtsloseMain.length)]
  gameEnded = true;
  MessageDiv.innerText = `${randomwintext.text} ${country.name}. Streak: ${localStorage.streak} → 0.`;
  localStorage.streak = 0;
  GuessInputButtonDiv.style.display = 'none'
  newgamecheck()
}
NewHint = () => {
  GuessInputDiv.value = ''
  if (!country.description) {
    if (CapitalDiv.innerText != `${capitaltxt}: ${country.capital}`) { CapitalDiv.innerText = `${capitaltxt}: ${country.capital}` }
    else if (FlagIMG.style.display == 'none') { FlagIMG.style.display = 'inherit' }
    else if (armorialDiv.style.display == 'none') { armorialDiv.style.display = 'block' }
  }
  else {
    if (DescriptionDiv.innerText != `${descriptiontxt}: ${country.description}` && NotWriting) {

      var p = 0;
      var txt = `${descriptiontxt}: ${country.description}`
      var speed = 10;

      function typeWriter() {
        NotWriting = false;
        if (p < txt.length) {
          DescriptionDiv.textContent += txt[p];
          p++;
          setTimeout(typeWriter, speed);
        } else { NotWriting = true; }

      }
      typeWriter();
      //DescriptionDiv.innerText = `Description: ${country.description}` 
    }
    else if (CapitalDiv.innerText != `${capitaltxt}: ${country.capital}` && NotWriting2) {

      var q = 0;
      var txt2 = `${capitaltxt}: ${country.capital}`
      var speed2 = 10;

      function typeWriter2() {
        NotWriting2 = false;
        if (q < txt2.length) {
          CapitalDiv.textContent += txt2[q];
          q++;
          setTimeout(typeWriter2, speed2);
        } else { NotWriting2 = true; }

      }
      typeWriter2();
      //CapitalDiv.innerText = `Capital: ${country.capital}`
    }
    else if (FlagIMG.style.display == 'none') { FlagIMG.style.display = 'inherit' }
    else if (maplocationDiv.style.display == 'none') { maplocationDiv.style.display = 'inherit' }
    else if (armorialDiv.style.display == 'none') { armorialDiv.style.display = 'block' }
  }
}

let checker = () => {

  numberOfGuesses++
  let Guess = GuessInputDiv.value.toLowerCase()
  if (Guess == (country.name).toLowerCase()) Win()
  else {
    if (numberOfGuesses > 5) { Lose() }
    else {
      NewHint()
    }
  }
}
let cleanUp = () => {
  gameEnded = false;
  DescriptionDiv.innerText = ''
  CapitalDiv.innerText = ''
  FlagIMG.innerHTML = ''
  maplocationDiv.innerHTML = ''
  MessageDiv.innerText = ''
  MessageDiv.style.display = 'none'
  numberOfGuesses = 0
  GuessInputButtonDiv.style.display = ''
  NewGameButton.style.display = 'none'
  GuessInputDiv.value = ''
}

GuessInputButtonDiv.onclick = () => { checker() }
GuessInputDiv.addEventListener("keydown", (k) => {
  if (k.keyCode == 13 && !gameEnded) { checker() }
})
NewGameButton.onclick = () => {
  { NewGameButton.style.display = 'none'; setTimeout(game, 1000); }
}

GuessInputDiv.addEventListener("keydown", (k) => {
  if (k.keyCode == 32 && NewGameButton.style.display == '') { NewGameButton.style.display = 'none'; setTimeout(game, 1000); }
})
document.addEventListener("keydown", (k) => {
  if (k.keyCode == 32 && NewGameButton.style.display == '') { NewGameButton.style.display = 'none'; setTimeout(game, 1000); }
})
