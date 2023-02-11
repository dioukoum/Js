let items = document.querySelectorAll('.navbar>ul>li')

items.forEach(item => {
   item.addEventListener('click',()=>{
        removeFocus();
        item.style.color='orange'
        item.firstChild.nextSibling.classList.add('active')
   })
});
function removeFocus(){
    items.forEach(item =>{
        item.style.color='black'
        item.firstChild.nextSibling.classList.remove('active')
    })
}

// theme.addEventListener('click',()=>{
//     monHtml.classList.toggle('dark')
//     theme.nextElementSibling.firstElementChild.classList.toggle('orange')
//     monHtml.style.transitionDelay=".3s"
//     monHtml.style.transitionTimingFunction="ease-in-out"
// })
// div.addEventListener('click',()=>{
//     cercle.classList.toggle('transit')
//     monHtml.classList.toggle('dark')
// })
// window.addEventListener('beforeunload',function(e){
//     e.preventDefault()
//     e.returnValue=''
// })
function checkFileSize(){
    const FS = document.getElementById('FS')
let files = FS.files
if(files.length > 0){
    if(files[0].size > 700*1024){
        FS.setCustomValidity("Le fichier doit etre inferieur a 700kb")
       return
    }
    FS.setCustomVality("")
}

}
window.document.getElementById('FS').onchange=checkFileSize


