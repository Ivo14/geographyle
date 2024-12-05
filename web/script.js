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
let lang = document.getElementById('lang-switch')
let capitaltxt = 'Capital';
let descriptiontxt = 'Description';
if (localStorage.lang == undefined) localStorage.lang = "en";
lang.options[lang.selectedIndex].value = localStorage.lang;
let numberOfGuesses = 0
if (localStorage.streak == undefined) { localStorage.streak = 0; }
NotWriting = true;
NotWriting2 = true;
gameEnded = false;
let arrcountries = [];
let country = {};
fetch('/data/countries.json')
  .then(response => response.json())
  .then(data => {
    arrcountries = data;
    const datalist = document.getElementById("countries");
    arrcountries.forEach(country => {
      const option = document.createElement("option");
      if (localStorage.lang == 'es') option.value = country.namees;
      if (localStorage.lang == 'en') option.value = country.name;
      if (localStorage.lang == 'fr') option.value = country.namefr;
      if (localStorage.lang == 'bg') option.value = country.namebg;
      if (localStorage.lang == 'de') option.value = country.namede;
      datalist.appendChild(option);
    });
    game1();
  })
let randomwintxtsMain = [];
let randomwintxtsloseMain = [];
let randomwintxts = [{ text: 'You have won, the country was indeed' }, { text: 'You have won, the country really was' }, { text: 'You have won, fortunately for you the country was' }, { text: 'You have won, yep it is' }, { text: 'You have won, it was obviously' }]
let randomwintxtslose = [{ text: 'You have lost, the country was' }, { text: 'You have lost, the country really was' }, { text: 'You have lost, unfortunately for you the country was' }, { text: 'You have lost, it is' }, { text: 'You have lost, it was obviously' }]
let randomwintxtsfr = [{ text: 'Bon travail c\'est vraiment' }, { text: 'Heureusement pour toi c\'était' }, { text: 'Bravo, c\'est vraiment' }, { text: 'Oui c\'était' }, { text: 'Bravo, c\'était évidemment' }]
let randomwintxtslosefr = [{ text: 'Tu as perdu, malheureusement, vous avez perdu, le pays était' }, { text: 'Tu as perdu, difficile, c\'était' }, { text: 'Tu as perdu, comment tu n\'as pas pensé à' }, { text: 'Tu as perdu, c\'est juste' }, { text: 'Tu as perdu, le pays que vous recherchiez était' }]
let randomwintxtses = [{ text: 'Bien hecho, tí@, de verdad es' }, { text: 'Has ganado, fue obvio que es' }, { text: 'Has ganado, afortunadamente para ti es' }, { text: 'Has ganado, sí, es' }, { text: 'Has ganado, fue' }]
let randomwintxtslosees = [{ text: 'Has perdido, realmente es' }, { text: 'Has perdido, el país fue' }, { text: 'Has perdido, desafortunadamente para ti es' }, { text: 'Has perdido, es' }, { text: 'Has perdido, fue obvio que es' }]
let randomwintxtslosebg = [{ text: 'Загуби, всъщност е' }, { text: 'Загуби, държавата е' }, { text: 'Загуби, за жалост държавата е' }, { text: 'Загуби, беше очевидно, че е' }]
let randomwintxtslosede = [{ text: 'Du hast verloren, es ist eigentlich' }, { text: 'Du hast verloren, das Land war' }, { text: 'Du hast verloren, bedauerlicherweise das Land war' }, { text: 'Du hast verloren, es war offensichtlich' }]
let randomwintxtsbg = [{ text: 'Спечели, наистина е' }, { text: 'Спечели! Беше очевидно, че е' }, { text: 'Спечели! За твое щастие, беше' }]
let randomwintxtsde = [{ text: 'Du hast gewonnen! Das Land war' }]
function changelang(country, language) {
  switch (language) {
    case 'en':
      country.description = country.description;
      country.name = country.name;
      for (let i = 0; i < randomwintxts.length; i++) { randomwintxtsMain[i] = randomwintxts[i]; }
      for (let i = 0; i < randomwintxtslose.length; i++) { randomwintxtsloseMain[i] = randomwintxtslose[i]; }
      GuessInputButton.innerText = "Guess";
      NewGameButton.innerText = "New game";
      capitaltxt = 'Capital';
      descriptiontxt = 'Description';
      break;
    case 'bg':
      country.description = country.descriptionbg;
      country.name = country.namebg;
      for (let i = 0; i < randomwintxtsbg.length; i++) { randomwintxtsMain[i] = randomwintxtsbg[i]; }
      for (let i = 0; i < randomwintxtslosebg.length; i++) { randomwintxtsloseMain[i] = randomwintxtslosebg[i]; }
      GuessInputButton.innerText = "Познай";
      NewGameButton.innerText = "Нова игра";
      GuessInputDiv.placeholder = "Въведи държава"
      capitaltxt = 'Столица';
      descriptiontxt = 'Описание';
      break;
    case 'de':
      country.description = country.descriptionde;
      country.name = country.namede;
      for (let i = 0; i < randomwintxtsde.length; i++) { randomwintxtsMain[i] = randomwintxtsde[i]; }
      for (let i = 0; i < randomwintxtslosede.length; i++) { randomwintxtsloseMain[i] = randomwintxtslosede[i]; }
      GuessInputButton.innerText = "Errate";
      NewGameButton.innerText = "Neues Spiel";
      GuessInputDiv.placeholder = "Land betreten"
      capitaltxt = 'Hauptstadt';
      descriptiontxt = 'Beschreibung';
      break;
    case 'es':
      country.description = country.descriptiones;
      country.name = country.namees;
      for (let i = 0; i < randomwintxtses.length; i++) { randomwintxtsMain[i] = randomwintxtses[i]; }
      for (let i = 0; i < randomwintxtslosees.length; i++) { randomwintxtsloseMain[i] = randomwintxtslosees[i]; }
      GuessInputButton.innerText = "Adivina";
      NewGameButton.innerText = "Nuevo juego";
      GuessInputDiv.placeholder = "Introducir país";
      capitaltxt = 'Capital';
      descriptiontxt = 'Descripción';
      break;
    case 'fr':
      country.description = country.descriptionfr;
      country.name = country.namefr;
      for (let i = 0; i < randomwintxtsfr.length; i++) { randomwintxtsMain[i] = randomwintxtsfr[i]; }
      for (let i = 0; i < randomwintxtslosefr.length; i++) { randomwintxtsloseMain[i] = randomwintxtslosefr[i]; }
      GuessInputButton.innerText = "Deviner";
      NewGameButton.innerText = "Nouveau jeu";
      GuessInputDiv.placeholder = "Saisir le pays"
      capitaltxt = 'Capital';
      descriptiontxt = 'Description';
      break;
    default:
      country.description = country.description;
      country.name = country.name;
      for (let i = 0; i < randomwintxts.length; i++) { randomwintxtsMain[i] = randomwintxts[i]; }
      for (let i = 0; i < randomwintxts.length; i++) { randomwintxtsloseMain[i] = randomwintxtslose[i]; }
      GuessInputButton.innerText = "Guess";
      NewGameButton.innerText = "New game";
      GuessInputDiv.placeholder = "Enter country";
  }
}
let changelang1 = (country, language) => {
  switch (language) {
    case 'en':
      country.name = country.name;
      break;
    case 'bg':
      country.name = country.namebg;
      break;
    case 'de':
      country.name = country.namede;
      break;
    case 'es':
      country.name = country.namees;
      break;
    case 'fr':
      country.name = country.namefr;
      break;
    default:
      country.description = country.description;
      country.name = country.name;
      for (let i = 0; i < randomwintxts.length; i++) { randomwintxtsMain[i] = randomwintxts[i]; }
      for (let i = 0; i < randomwintxts.length; i++) { randomwintxtsloseMain[i] = randomwintxtslose[i]; }
      GuessInputButton.innerText = "Guess";
      NewGameButton.innerText = "New game";
  }
}


let game1 = () => {

  country = arrcountries[Math.floor(Math.random() * arrcountries.length)]

  changelang(country, localStorage.lang);

  maplocationDiv.innerHTML = `<img src = ${country.maplocation} height = 250 draggable="false" >`
  armorialDiv.innerHTML = `<img src = ${country.armorial} height = 250 draggable="false">`
  //country.flag=`https://countryflagsapi.com/png/${country.code}`
  if (country.flag == undefined) { country.flag = `https://flagsapi.com/${country.code.toUpperCase()}/shiny/64.png` }
  FlagIMG.style.display = 'none'
  FlagIMG.innerHTML = `<img src = ${country.flag} draggable="false"/>`
  maplocationDiv.style.display = 'none'
  armorialDiv.style.display = 'none'
  if (country.picture != undefined) body.style.backgroundImage = `url(${country.picture})`
  else body.style.backgroundImage = `url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp3416336.jpg&f=1&nofb=1&ipt=c360357dde07f57cd9aee85cc2a13e6940e022536c3898d602bfa1da72244bbf&ipo=images)`
}
let game = () => {
  cleanUp();
  country = arrcountries[Math.floor(Math.random() * arrcountries.length)]
  changelang(country, localStorage.lang);
  maplocationDiv.innerHTML = `<img src = ${country.maplocation} height = 250 draggable="false">`
  armorialDiv.innerHTML = `<img src = ${country.armorial} height = 250 draggable="false">`
  //country.flag=`https://countryflagsapi.com/png/${country.code}`
  if (country.flag == undefined) { country.flag = `https://flagsapi.com/${country.code.toUpperCase()}/shiny/64.png` }
  FlagIMG.style.display = 'none'
  FlagIMG.innerHTML = `<img src = ${country.flag} draggable="false">`
  maplocationDiv.style.display = 'none'
  armorialDiv.style.display = 'none'
  body.style.backgroundImage = `url(${country.picture})`
}
newgamecheck = () => {
  if (NotWriting && NotWriting2) NewGameButton.style = ''
  else setTimeout(newgamecheck, 1000)
}
Win = () => {
  MessageDiv.style.display = '';
  localStorage.streak++;
  MessageDiv.classList.add('strokemegreen');
  MessageDiv.classList.remove('strokemered');
  let randomwintext = randomwintxtsMain[Math.floor(Math.random() * randomwintxtsMain.length)]

  gameEnded = true;
  MessageDiv.innerText = `${randomwintext.text} ${country.name}. Streak: ${localStorage.streak}`;
  GuessInputButtonDiv.style.display = 'none';
  for (let i = 0; i < 5; i++) { NewHint() }
  newgamecheck()
}
Lose = () => {
  MessageDiv.style.display = '';
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
  MessageDiv.style.display = 'none';
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
