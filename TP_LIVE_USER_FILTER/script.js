const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

getData()

filter.addEventListener('input', (e)=> filterData(e.target.value))


async function getData(){
    const res = await fetch('https://randomuser.me/api?results=50&nat=fr')
    const {results} = await res.json()


    result.innerHTML = ''
    
   const trier =orderList(results)

    results.forEach(user => {
        const li = document.createElement('li')

        listItems.push(li)

        li.innerHTML= `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4 id="h4">${user.name.first} ${user.name.last}<h4>
                <p>${user.location.city}, ${user.location.state}</p>
            </div>
        `
        result.appendChild(li)
    });

}

let span = document.getElementById('span')

span.addEventListener('click', ()=>{
    
})

function filterData(searchTerm){
    listItems.forEach(item =>{
        if(item.innerHTML.toLowerCase().includes(searchTerm.toLowerCase())){
            let re= new RegExp(searchTerm, 'i')
           
            item.classList.remove('hide')
        }else{
            item.classList.add('hide')
        }
    })
}

function orderList(data){
    const orderData = data.sort((a,b)=>{
        if(a.name.first.toLowerCase() < b.name.first.toLowerCase()){
            return -1
        }
        if(a.name.first.toLowerCase() > b.name.first.toLowerCase()){
            return 1
        }
        return 0
    })
}