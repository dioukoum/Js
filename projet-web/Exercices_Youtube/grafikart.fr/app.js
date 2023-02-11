const theme= document.getElementById('choix')
const meteo= document.getElementById('meteo')
const html= document.querySelector('html')
const para= document.querySelector('p')

document.body.style.padding= '10px'
document.querySelector('h1').style.textAlign= 'center'

function update(bgColor, textColor){
    html.style.backgroundColor= bgColor
    html.style.color= textColor
}

theme.onchange= function(){
    (theme.value == 'noir')? update('black','white'): update('white','black')
}
meteo.addEventListener('change',prevision)

function prevision(){
    let choice= meteo.value
    if(choice == 'ete'){
        para.textContent= "Il fait ete"
    }
    else if(choice == 'hiver'){
        para.textContent= "Il fait hiver"
    }
    else if(choice == 'pluie'){
        para.textContent= "La pluie tombe"
    }
}