const wrap = document.querySelector('.wrap')
const func = async () => {
 
 
    //получаем данные 
    const response = await fetch("https://dummyjson.com/users"); 

    //сохраняем данные в переменную data
    const data = await response.json()
    
    console.log(data.users);


    data.users.map((card) => {
        wrap.innerHTML += `
<div class="card">
    <img src=${card.image} alt="">
    <h2>${card.firstName} ${card.lastName}</h2>
    <h3>${card.gender}</h3>
    <p>${card.university}</p>
    <b>${card.ssn}</b>
    <button>Buy</button>
    
</div>`;
    })


}
func()