function letterToNum(number) {
    if(isNaN(number) || number < 0 || number > 999){
        alert("Veuillez entrez un nombre entre 0 et 999 s'il vous plait!!! ")
    }
    else{
        let unite2Letter = ['','UN','DEUX','TROIS','QUATRE','CINQ','SIX','SEPT','HUIT','NEUF','DIX','ONZE','DOUZE','TREIZE','QUATORZE','QUINZE','SEIZE','DIX-SEPT','DIX-HUIT','DIX-NEUF']
        let tens2Letter = ['','DIX','VINGT','TRENTE','QUARANTE','CINQUANTE','SOIXANTE','SOIXANTE','QUATRE-VINGT','QUATRE-VINGT']
    
        let units = number%10
        let tens = (number%100 - units)/10
        let centaines= (number%1000 - number%100)/100

        let unitOut, tensOut,centOut;

        
        if(number === 0){
            return "ZERO"
        }
        else{
            /**units */
            unitOut=unite2Letter[units]
            /**dizaines */
            if(tens==1 && units>0){
                tensOut= unite2Letter[10+units]
                unitOut=''
            }
            else if(tens===7 || tens ===9){
                tensOut= tens2Letter[tens]+' '+unite2Letter[10+units]
                unitOut=''
            }
            else{
                tensOut=tens2Letter[tens]
            }
            /**centaine */
            centOut = (centaines > 1 ? unite2Letter[centaines] : '')+(centaines >0 ? ' CENT' : '')

            return centOut+' '+tensOut+' '+unitOut
        }
    }
}

let result = letterToNum(prompt(parseInt("Enter un nombre entre 0 et 999 svp: ")))
alert(result)

let div = document.createElement('div')
document.querySelector('body').append(div)
div.innerHTML = `<h1>Hello tout le monde et bienvenue sur ma page</h1>`
document.querySelector('h1').style.color='green'