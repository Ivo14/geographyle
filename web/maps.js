let GuessInputButton = document.getElementById('GuessInputButton')
let NewGameButton = document.getElementById('NewGameButton');
let GuessInput = document.getElementById('GuessInput')
let MessageDiv = document.getElementById('Message')
let arr = [];
let chosenMap;
let gameEnded;
function game() {
    gameEnded=false;
    GuessInput.value=''
    GuessInputButton.style.display=''
    MessageDiv.innerText = `When was this map made?`
    Message.style.color='white'
    NewGameButton.style.display='none'
    fetch('/data/maps.json')
        .then(response => response.json())
        .then(data => {
            arr = data;
        }).then(
            generate
        )
    }
function generate(){
    chosenMap = arr[Math.floor(Math.random() * arr.length)];
    document.getElementById('mapContainer').innerHTML=`
    <iframe id="widgetPreview" 
            src="${chosenMap.source}"
            frameborder="0"
            width="2000"
            height="700"
            style="position: absolute; top: 0; left: -280px; border: 0;">
    </iframe>
    `
}
function checker(){
    let Guess = GuessInput.value.toLowerCase()
    let away = Math.abs(Guess - chosenMap.year)
    r = Math.min(255, Math.floor(away * 5));  // Gradually increase red
    g = Math.max(0, 255 - Math.floor(away * 5));  // Gradually decrease green
    const color = `rgb(${r}, ${g}, 0)`;
    Message.style.color = color;
  if (Guess == chosenMap.year) { MessageDiv.innerText = `You got it spot on! It is ${chosenMap.year}!`}
  else {
    MessageDiv.innerText = `You are ${away} years away! It is ${chosenMap.year}!`
  }
  NewGameButton.style.display=''
  GuessInput.value=''
  GuessInputButton.style.display='none'
  gameEnded=true;
}
game();
GuessInputButton.onclick = () => { checker() }
NewGameButton.onclick = () => { game() }

GuessInput.addEventListener("keydown", (k) => {
    if (k.keyCode == 13 && !gameEnded) { checker() }
    if (k.keyCode == 32 && NewGameButton.style.display == '') { NewGameButton.style.display = 'none'; setTimeout(game, 1000); }
  })
  
  document.addEventListener("keydown", (k) => {
    if (k.keyCode == 32 && NewGameButton.style.display == '') { NewGameButton.style.display = 'none'; setTimeout(game, 1000); }
  })