const result = document.getElementById('result')


function getUser(){
    let ajax= new XMLHttpRequest()
    ajax.onreadystatechange= function(){
        if(this.readyState === 4 && this.status === 200){
            const data = JSON.parse(this.response)
            const results = data.results

            result.innerHTML= ''
            results.forEach(user =>{
                const li = document.createElement('li')

                li.innerHTML=`
                    <img src="${user.picture.large}" alt="${user.name.first}">
                    <div>
                        <h4>${user.name.first} ${user.name.last}</h4>
                    </div>
                `
                result.appendChild(li)
            })
        }
    }

    ajax.open("GET","https://randomuser.me/api?results=50&nat=fr",true)
    ajax.send()
}
getUser()

