let fact=document.getElementById('fact')
let green=document.getElementById('green')
let red=document.getElementById('red')
let streakDiv=document.getElementById('streak')
let streak=0;
let facts=[];
fetch('/data/facts.json')
  .then(response => response.json()) 
  .then(data => {
     facts = data; 
    newfact();
})
let currentfact;
let newfact = () => {
currentfact=facts[Math.floor(Math.random() * facts.length)]
fact.innerText=currentfact.text}
green.onclick = () => {
  if(currentfact.trueorfalse=='true'){
   streak++;streakDiv.innerText=`Streak: ${streak}`;streakDiv.style.color='white'; newfact();
}else{streak=0;streakDiv.innerText=`Streak: ${streak}`;streakDiv.style.color='red'}}
red.onclick = () => {
  if(currentfact.trueorfalse=='false'){
   streak++;streakDiv.innerText=`Streak: ${streak}`;streakDiv.style.color='white'; newfact(); 
  }
  else{streak=0;streakDiv.innerText=`Streak: ${streak}`;streakDiv.style.color='red'}
}
