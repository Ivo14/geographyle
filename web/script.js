let DescriptionDiv = document.getElementById('Description')
let CapitalDiv = document.getElementById('capital')
let FlagIMG = document.getElementById('flag')
let maplocationDiv = document.getElementById('maplocation')
let GuessInputDiv = document.getElementById('GuessInput')
let GuessInputButtonDiv = document.getElementById('GuessInputButton')
let MessageDiv = document.getElementById('Message')
let NewGameButton = document.getElementById('NewGameButton')
let picDiv = document.getElementById('pic')
let body = document.getElementById('body')
let lang = document.getElementById('lang-switch')
if(localStorage.lang==undefined) localStorage.lang="en";
lang.options[lang.selectedIndex].value = localStorage.lang;
let numberOfGuesses = 0
if(localStorage.streak==undefined) {localStorage.streak=0;}
NotWriting=true;
NotWriting2=true;
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
      if(localStorage.lang=='es') option.value = country.namees;
      if(localStorage.lang=='en') option.value = country.name;
      if(localStorage.lang=='fr') option.value = country.namefr;
      datalist.appendChild(option);
    });
game1();  
})
let randomwintxtsMain=[];
let randomwintxtsloseMain=[];
let randomwintxts=[{text:'You have won, the country was indeed'},{text:'You have won, the country really was'},{text:'You have won, fortunately for you the country was'},{text:'You have won, yep it is'},{text:'You have won, it was obviously'}]
let randomwintxtslose=[{text:'You have lost, the country was'},{text:'You have lost, the country really was'},{text:'You have lost, unfortunately for you the country was'},{text:'You have lost, it is'},{text:'You have lost, it was obviously'}]
let randomwintxtsfr=[{text:'Bon travail c\'est vraiment'},{text:'Heureusement pour toi c\'était'},{text:'Bravo, c\'est vraiment'},{text:'Oui c\'était'},{text:'Bravo, c\'était évidemment'}]
let randomwintxtslosefr=[{text:'Tu as perdu, malheureusement, vous avez perdu, le pays était'},{text:'Tu as perdu, difficile, c\'était'},{text:'Tu as perdu, comment tu n\'as pas pensé à'},{text:'Tu as perdu, c\'est juste'},{text:'Tu as perdu, le pays que vous recherchiez était'}]
let randomwintxtses=[{text:'Bien hecho, tí@, de verdad es'},{text:'Has ganado, fue obvio que es'},{text:'Has ganado, afortunadamente para ti es'},{text:'Has ganado, sí, es'},{text:'Has ganado, fue'}]
let randomwintxtslosees=[{text:'Has perdido, realmente es'},{text:'Has perdido, el país fue'},{text:'Has perdido, desafortunadamente para ti es'},{text:'Has perdido, es'},{text:'Has perdido, fue obvio que es'}]
  
function changelang (country,language) {
  switch (language) {
  case 'en':
      country.description=country.description;
      country.name=country.name;
      for(let i=0;i<randomwintxts.length;i++){ randomwintxtsMain[i] = randomwintxts[i];}
      for(let i=0;i<randomwintxts.length;i++){ randomwintxtsloseMain[i] = randomwintxtslose[i];}
      GuessInputButton.innerText = "Guess";
      NewGameButton.innerText = "New game";
  break;
  case 'es':
      country.description=country.descriptiones;
      country.name=country.namees;
      for(let i=0;i<randomwintxts.length;i++){ randomwintxtsMain[i] = randomwintxtses[i];}
      for(let i=0;i<randomwintxts.length;i++){ randomwintxtsloseMain[i] = randomwintxtslosees[i];}
      GuessInputButton.innerText = "Adivina";
      NewGameButton.innerText = "Nuevo juego";
      GuessInputDiv.placeholder = "Introducir país";
  break;
      case 'fr':
          country.description=country.descriptionfr;
          country.name=country.namefr;
      for(let i=0;i<randomwintxts.length;i++){ randomwintxtsMain[i] = randomwintxtsfr[i];}
      for(let i=0;i<randomwintxts.length;i++){ randomwintxtsloseMain[i] = randomwintxtslosefr[i];}
      GuessInputButton.innerText = "Deviner";
      NewGameButton.innerText = "Nouveau jeu";
      GuessInputDiv.placeholder = "Saisir le pays"
      break;
  default:
      country.description=country.description;
      country.name=country.name;
      for(let i=0;i<randomwintxts.length;i++){ randomwintxtsMain[i] = randomwintxts[i];}
      for(let i=0;i<randomwintxts.length;i++){ randomwintxtsloseMain[i] = randomwintxtslose[i];}
      GuessInputButton.innerText = "Guess";
      NewGameButton.innerText = "New game";
      GuessInputDiv.placeholder = "Enter country";
  }
}
let changelang1 = (country,language) =>{
  switch (language) {
  case 'en':
      country.name=country.name;
  break;
  case 'es':
      country.name=country.namees;
  break;
  case 'fr':
          country.name=country.namefr;
      break;
  default:
      country.description=country.description;
      country.name=country.name;
      for(let i=0;i<randomwintxts.length;i++){ randomwintxtsMain[i] = randomwintxts[i];}
      for(let i=0;i<randomwintxts.length;i++){ randomwintxtsloseMain[i] = randomwintxtslose[i];}
      GuessInputButton.innerText = "Guess";
      NewGameButton.innerText = "New game";
  }
}


let game1 = () => {
  /*country = {
        "name": "Serbia",
        "namees": "Serbia",
        "namefr": "Serbie",
        "description": "A landlocked country at the crossroads of Southeast and Central Europe, located in the Balkans and the Pannonian Plain. A survey from 2014 showed that 47% of the citizens of the country favour the Latin alphabet, 36% favour the Cyrillic one and 17% have no preference.",
        "maplocation": "https://upload.wikimedia.org/wikipedia/commons/9/95/Location_map_of_Serbia_on_the_globe_%282011%29.svg",
        "code": "RS",
        "capital": "Belgrade",
        "picture": "https://images.pexels.com/photos/28531964/pexels-photo-28531964/free-photo-of-scenic-alpine-farm-landscape-with-cows.jpeg",
        "descriptionfr": "Pays enclavé au carrefour de l'Europe du Sud-Est et de l'Europe centrale, situé dans les Balkans et la plaine de Pannonie. Un sondage réalisé en 2014 a montré que 47 % des citoyens du pays sont favorables à l'alphabet latin, 36 % à l'alphabet cyrillique et 17 % n'ont pas de préférence.",
        "descriptiones": "País sin salida al mar situado en la encrucijada del sureste y el centro de Europa, ubicado en los Balcanes y la llanura panónica. Una encuesta de 2014 mostró que el 47% de los ciudadanos del país está a favor del alfabeto latino, el 36% del cirílico y el 17% no tiene preferencias."
  }*/
         country = arrcountries[Math.floor(Math.random() * arrcountries.length)]
  
  changelang(country,localStorage.lang);
 

  maplocationDiv.innerHTML = `<img src = ${country.maplocation} height = 250 width = 250 class=fla>`
  //country.flag=`https://countryflagsapi.com/png/${country.code}`
  if(country.flag==undefined) {country.flag = `https://flagsapi.com/${country.code.toUpperCase()}/shiny/64.png`}
  FlagIMG.style.display = 'none'
  FlagIMG.innerHTML = `<img src = ${country.flag} class=fla>`
  maplocationDiv.style.display = 'none'
  if(country.picture!=undefined) body.style.backgroundImage = `url(${country.picture})`
  else body.style.backgroundImage = `url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp3416336.jpg&f=1&nofb=1&ipt=c360357dde07f57cd9aee85cc2a13e6940e022536c3898d602bfa1da72244bbf&ipo=images)`
}
let game = () => {
  country = arrcountries[Math.floor(Math.random() * arrcountries.length)]
  changelang(country,localStorage.lang);
  maplocationDiv.innerHTML = `<img src = ${country.maplocation} height = 250 width = 250 class=fla>`
  //country.flag=`https://countryflagsapi.com/png/${country.code}`
  if(country.flag==undefined) {country.flag = `https://flagsapi.com/${country.code.toUpperCase()}/shiny/64.png`}
  FlagIMG.style.display = 'none'
  FlagIMG.innerHTML = `<img src = ${country.flag} class=fla>`
  maplocationDiv.style.display = 'none'
  if(country.picture!=undefined) body.style.backgroundImage = `url(${country.picture})`
  else body.style.backgroundImage = `url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp3416336.jpg&f=1&nofb=1&ipt=c360357dde07f57cd9aee85cc2a13e6940e022536c3898d602bfa1da72244bbf&ipo=images)`
}
newgamecheck = ()=>{
  if(NotWriting && NotWriting2) NewGameButton.style = ''
  else setTimeout(newgamecheck, 1000)
}
Win = () => {
  
  localStorage.streak++;
  MessageDiv.classList.add('strokemegreen');
  MessageDiv.classList.remove('strokemered');
let randomwintext=randomwintxtsMain[Math.floor(Math.random() *randomwintxts.length)]

gameEnded = true; 
MessageDiv.innerText = `${randomwintext.text} ${country.name}. Streak: ${localStorage.streak}`;
GuessInputButtonDiv.style.display = 'none';
  for (let i = 0; i < 4; i++) { NewHint() }
  newgamecheck()
}
Lose = () => {
  
  MessageDiv.classList.add('strokemered');
  MessageDiv.classList.remove('strokemegreen');
let randomwintext=randomwintxtsloseMain[Math.floor(Math.random() *randomwintxtsloseMain.length)]
   gameEnded = true;
  MessageDiv.innerText = `${randomwintext.text} ${country.name}. Streak: ${localStorage.streak} → 0.`; 
  localStorage.streak=0;
  GuessInputButtonDiv.style.display = 'none'
  newgamecheck()
}
NewHint = () => {
  GuessInputDiv.value=''
  if (!country.description) {
    if (CapitalDiv.innerText != `Capital: ${country.capital}`) { CapitalDiv.innerText = `Capital: ${country.capital}` }
    else if (FlagIMG.style.display == 'none') { FlagIMG.style.display = 'inherit' }
  }
  else {
    if (DescriptionDiv.innerText != `Description: ${country.description}` && NotWriting) { 

      var p = 0;
var txt = `Description: ${country.description}`
var speed = 10;

function typeWriter() {
  NotWriting=false;
  if (p < txt.length) {
    DescriptionDiv.textContent += txt[p];
    p++;
    setTimeout(typeWriter, speed);
  } else { NotWriting=true;}

}
      typeWriter();
      //DescriptionDiv.innerText = `Description: ${country.description}` 
    }
    else if (CapitalDiv.innerText != `Capital: ${country.capital}` && NotWriting2) { 

      var q = 0;
var txt2 = `Capital: ${country.capital}`
var speed2 = 10;

function typeWriter2() {
  NotWriting2=false;
  if (q < txt2.length) {
    CapitalDiv.textContent += txt2[q];
    q++;
    setTimeout(typeWriter2, speed2);
  } else { NotWriting2=true;}

}
      typeWriter2();
      //CapitalDiv.innerText = `Capital: ${country.capital}`
    }
    else if (FlagIMG.style.display == 'none') { FlagIMG.style.display = 'inherit' }
    else if (maplocationDiv.style.display == 'none') { maplocationDiv.style.display = 'inherit' }
  }
}

let checker = () => {

  numberOfGuesses++
  let Guess = GuessInputDiv.value.toLowerCase()
  if (Guess == (country.name).toLowerCase()) Win()
  else {
    if(numberOfGuesses>4){Lose()}
    else{
    NewHint()
  }
  }
}
let anewgame = () => {
  gameEnded = false;
  DescriptionDiv.innerText = ''
  CapitalDiv.innerText = ''
  FlagIMG.innerHTML = ''
  maplocationDiv.innerHTML = ''
  MessageDiv.innerText = ''
  numberOfGuesses = 0
  GuessInputButtonDiv.style.display = ''
  NewGameButton.style.display = 'none'
  GuessInputDiv.value = ''
  game()
}

GuessInputButtonDiv.onclick = () => { checker() }
GuessInputDiv.addEventListener("keydown", (k) => {
  if (k.keyCode == 13 && !gameEnded) { checker() }
})
NewGameButton.onclick = () => {
      {NewGameButton.style.display = 'none';setTimeout(anewgame, 1000);}
}

GuessInputDiv.addEventListener("keydown", (k) => {
  if (k.keyCode == 32 && NewGameButton.style.display == '') {NewGameButton.style.display = 'none';setTimeout(anewgame, 1000);}
})
document.addEventListener("keydown", (k) => {
  if (k.keyCode == 32 && NewGameButton.style.display == '') {NewGameButton.style.display = 'none';setTimeout(anewgame, 1000);}
})
