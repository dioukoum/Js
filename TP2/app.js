let auteur= document.getElementById('author');
let job= document.getElementById('job');
let info= document.getElementById('info');
let photo= document.getElementById('img');
let btnLeft = document.querySelector(".prev-btn")
let btnRight = document.querySelector(".next-btn")
let randomBtn =  document.querySelector(".random-btn")
let i=0

// Donnees des commentaires
const commentaires = [
    {
        id : 1 ,
        name : " susan smith " ,
        job : " web developer " ,
        img :
        "https://thumbs.dreamstime.com/b/femme-africaine-triste-34871332.jpg" ,
        text :" I 'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop - up . Shaman humblebrag pickled coloring book salvia hoodie , cold - pressed four dollar toast everyday carry " 
    } ,
    {
        id : 2 ,
        name : " anna johnson " ,
        job : " web designer " ,
        img :"https://pbs.twimg.com/profile_images/1371387232964198401/uZmYyQYd_400x400.jpg" ,
        text :" Helvetica artisan kinfolk thundercats lumbersexual blue bottle . Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe . photo booth jean shorts artisan narwhal . " 
    } ,
    {
        id : 3 ,
        name : " peter jones " ,
        job : " intern " ,
        img :"https://i2-prod.mirror.co.uk/incoming/article26015546.ece/ALTERNATES/s1200c/1_JS254524553.jpg" ,
        text :" Sriracha literally flexitarian irony , vape marfa unicorn . Glossier tattooed 8 - bit , fixie aistcoat offal activated charcoal slow - carb marfa hell of pabst raclette post - ironic jianbing swag . " 
    } ,
    {
        id : 4 ,
        name : " bill anderson " ,
        job : " the boss " ,
        img :"./images/alves-1.jpeg" ,
        text :" Edison bulb put a bird on it humblebrag , marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan . VHS farm - to - table schlitz , edison bulb pop - up 3 wolf moon tote bag street art shabby chic . " 
    } ,
];


// console.log(btnRight);
// i= commentaires.length-1
btnLeft.addEventListener('click', function(){
    
    if(i>0){
        i--
        photo.setAttribute("src" , commentaires[i].img)
        auteur.textContent= commentaires[i].name
        job.textContent=commentaires[i].job
        info.textContent=commentaires[i].text
        console.log(i+" -prev");
        }
        if(i==0){
            ++i
        }
})
btnRight.addEventListener('click', function(){
    if(i<commentaires.length){
    photo.setAttribute("src" , commentaires[i].img)
    auteur.textContent= commentaires[i].name
    job.textContent=commentaires[i].job
    info.textContent=commentaires[i].text
    console.log(i+" -suiv");
    i++
    }
    if(i==commentaires.length){
        --i
    }
    
})
randomBtn.addEventListener('click',function(){
    let rand = Math.floor(Math.random()*4)
    photo.setAttribute("src" , commentaires[rand].img)
    auteur.textContent= commentaires[rand].name
    job.textContent=commentaires[rand].job
    info.textContent=commentaires[rand].text
})