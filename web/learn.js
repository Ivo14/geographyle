let  cardsContainer = document.getElementById('cards')
let arr = [];

fetch('/data/countries.json')
  .then(response => response.json()) 
  .then(data => {
     arr = data;
  }).then(
    generate
  )

  function generate() {
    arr.forEach(country => {
        let card = document.createElement('div');
        card.className = 'card';
    
        card.innerHTML = `
          <div class='cardholder'>
            <div>${country.name}</div>
            <img loading="lazy" class='miniflag' src="${country.flag || `https://flagsapi.com/${country.code.toUpperCase()}/shiny/64.png`}" alt="Flag of ${country.name}">
          </div>
          <div style='padding-bottom:10px'>Capital: ${country.capital}</div>
          <img loading="lazy" src="${country.maplocation}" style='height:200px;width:200px' alt="Map of ${country.name}">
          <img  loading="lazy" src="${country.armorial}" style='height:200px;width:200px' alt="Armorial of ${country.name}">
          <div class='minidescription'>${country.description}</div>
        `;
    
        cardsContainer.appendChild(card);
    })
    }


