let numberRandom = Math.floor(Math.random() *10) +1
let i = 1
console.log(numberRandom);

let deviner = document.getElementById('deviner')

let lastResult = document.getElementById('lastResult')

let lowOrHi = document.getElementById('lowOrHi')

let btn = document.getElementById('btn')

devineChamp = document.getElementById('nombre')

let resetButton

function Deviner(){
   let userGuess= Number(devineChamp.value)
   if(i === 1) {
      deviner.textContent = "Propositions precedentes ";
   }
   deviner.textContent +=userGuess + ' ';
   if(userGuess === numberRandom) {
      lastResult.textContent = "Bravo, vous avez trouvé le nombre !"
      lastResult.style.backgroundColor= 'green'
      lowOrHi.textContent = '';
      setGameOver()
   }
   else if(i === 3) {
      lastResult.textContent = "!! Perdu !!"
      setGameOver()
   } else {
      lastResult.textContent = "Faux"
      lastResult.style.backgroundColor = "red"

      if(userGuess < numberRandom){
         lowOrHi.textContent = 'Le nombre saisi est trop petit !';
      }else if (userGuess > numberRandom) {
         lowOrHi.textContent = 'Le nombre saisi est trop grand !';
        }
   }
   i++;
   deviner.value = ""
   deviner.focus()
}

function setGameOver() {
   deviner.disabled = true;
   btn.disabled = true;
   resetButton = document.createElement('button');
   resetButton.textContent = 'Start new game';
   document.body.appendChild(resetButton);
   resetButton.addEventListener('click', resetGame);
 }
btn.addEventListener('click',Deviner)