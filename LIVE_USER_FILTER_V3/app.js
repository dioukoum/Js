// SELECTEURS
const searchInput= document.getElementById('search')
const resultSearch= document.querySelector('.table-results')
// ---------------------------------------------------------

// CREATION D'UN TABLEAU QUI VA CONTENIR LES DONNEES VENANT DU JSON
let dataArray= []
// CREATION D'UN OBJET XMLHTTPREQUEST
let ajax= new XMLHttpRequest()
const table= document.querySelector('.table-results')
ajax.onreadystatechange= function()
{
    if(this.readyState==4 && this.status==200)
    {
        console.log(this);
        let utilisateurs= this.response.results
        console.log(utilisateurs)
        dataArray= utilisateurs
        creatUserList(dataArray)
    }
}
function creatUserList(usersList)
{
    usersList.forEach(user =>
        {
            const listItem= document.createElement('div')
            listItem.setAttribute('class','table-item')
            listItem.innerHTML= `
            <div class="container-img">
            <img src="${user.picture}">
            <p class="name">${user.name.last} ${user.name.first}</p>
            </div>
            <p class="email">${user.email}</p>
            <p class="phone">${user.phone}</p>
            <p class="moyenne">${user.moyenne}</p>
            <p class="mention">${user.mention}</p>
            `
            resultSearch.appendChild(listItem)
        })
}
searchInput.addEventListener('input',filterData)
function filterData(e)
{
    resultSearch.innerHTML= ""
    const searchedString= e.target.value.toLowerCase().replace(/\s/g, "")
    const filteredArr= dataArray.filter(el=> el.name.first.toLowerCase().includes(searchedString) ||
        el.name.last.toLowerCase().includes(searchedString) ||
        `${el.name.first + el.name.last}`.toLowerCase().replace(/\s/g, "").includes(searchedString) ||
        `${el.name.last + el.name.first}`.toLowerCase().replace(/\s/g, "").includes(searchedString) ||
        el.mention.toLowerCase().includes(searchedString)

    )
    creatUserList(filteredArr)
}
ajax.open("GET","etudiants.json",true)
ajax.responseType= "json"
ajax.send()