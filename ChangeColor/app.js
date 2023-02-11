const btn = document.querySelector('.btn')
const colors=['green', 'red', 'rgbe(133,122,200)', 'f15025']

const color = document.querySelector('.color')

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber()
    document.body.style.background=colors[randomNumber]
})

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length)
}