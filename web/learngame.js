let cardsContainer = document.getElementById('cards')
let NewGameButton = document.getElementById('NewGameButton')
let text = document.getElementById('message')
localStorage.streak = 0;
//NewGameButton.style.display = 'none'
let arr = [];

function newgame() {
    fetch('/data/countries.json')
        .then(response => response.json())
        .then(data => {
            arr = data;
        }).then(
            generate
        )
}
function generate() {
    cardsContainer.innerHTML = ''
    let numberOfcards = 6;
    const shuffled = arr.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, numberOfcards);
    let type = Math.ceil(Math.random() * 6)
    let num = Math.floor(Math.random() * 5)
    let country = selected[num];
    do { replace = Math.floor(Math.random() * arr.length); console.log(arr[replace]) } while (arr[replace] == country)
    switch (type) {
        case 1:
            temp = country.name
            country.name = arr[replace].name;
            break;
        case 2:
            temp = country.code
            country.code = arr[replace].code;
            country.flag = arr[replace].flag;
            break;
        case 3:
            temp = country.capital
            country.capital = arr[replace].capital;
            break;
        case 4:
            temp = country.maplocation
            country.maplocation = arr[replace].maplocation;
            break;
        case 5:
            temp = country.armorial
            country.armorial = arr[replace].armorial;
            break;
        case 6:
            temp = country.description
            country.description = arr[replace].description;
            break;
    }
    for (let i = 0; i < numberOfcards; i++) {
        let country = selected[i];
        let card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
          <div class='cardholder'>
            <div id=1${i}>${country.name}</div>
            <img id=2${i} class='miniflag' src="${country.flag || `https://flagsapi.com/${country.code.toUpperCase()}/shiny/64.png`}" alt="Flag of ${country.name}">
          </div>
          <div id=3${i} style='padding-bottom:10px'>Capital: ${country.capital}</div>
          <img id=4${i} src="${country.maplocation}" style='height:200px;width:200px' alt="Map of ${country.name}">
          <img id=5${i} src="${country.armorial}" style='height:200px;width:200px' alt="Armorial of ${country.name}">
          <div id=6${i} class='minidescription'>${country.description}</div>
        `;

        cardsContainer.appendChild(card);

    }
    let odd = document.getElementById(`${type}${num}`);
    odd.onclick = function () {
        if (NewGameButton.style.display == 'none') {
            localStorage.streak++; text.innerText = `You got it! Streak: ${localStorage.streak}`
            odd.style.color = 'lime'; odd.style.background = '#5fbd5f'
            NewGameButton.style.display = 'inline'
        }
    }
    NewGameButton.onclick = () => {
        { NewGameButton.style.display = 'none'; text.innerText = ''; newgame(); }
    }
}
newgame();