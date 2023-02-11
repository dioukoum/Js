let color = document.getElementById('color')

console.log(color.value);

let body = document.querySelector('body')

color.addEventListener('change',()=>{
    body.style.background= color.value
})