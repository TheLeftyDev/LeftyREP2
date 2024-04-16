const regOpen = document.querySelector("#regOpen")
const logOpen = document.querySelector("nav #logOpen")
const logOut = document.querySelector("nav #logOut")
const logPopup = document.querySelector(".loginPopup")
const regPopup = document.querySelector(".regPopup")
const myCars = document.querySelector("#myCars")
const url = "http://localhost:3000/"

if (localStorage.getItem('currentUser') == null || localStorage.getItem('currentUser') == ''){
    currentUsername = ''
}
else{
    currentUsername = localStorage.getItem('currentUser')
}

let newObj = {}

let iflogged = localStorage.getItem('iflogged');
// console.log(iflogged);
if(iflogged == 0 || iflogged == null){
    logOut.style.display = 'none';
    myCars.style.display = 'none';
    // console.log(iflogged);

}
else{
    regOpen.style.display = 'none';
    logOpen.style.display = 'none';
    // console.log(iflogged);
}

const cardSpaceJS = document.querySelector('.cardSpace')
let dataJS = axios(url+`products/`)
// console.log(dataJS);
dataJS.then(({data})=>{
    // console.log(data);
    data.forEach(element => {
        // console.log(element.id);
        cardSpaceJS.innerHTML += `        <div class="card">
        <a href="./carDetail.html?id=${element.id}"</a>
        <img src="${element.link}" alt="car">
        <h2>${element.price} manat</h2>
        <h3>${element.marka} ${element.model} Model</h3>
        <h3>Year:${element.year}</h3>
        <h3>Year:Engine:${element.engine}</h3>
        <h3>Year:Mileage:${element.mileage}</h3>`
    });
})

// setInterval(() => {
//     console.log(currentUsername)
//     console.log(localStorage.getItem('currentUser'));
// }, 1000);
let userJS = axios(url+`users/`)
userJS.then(({data})=>{


    logOpen.addEventListener("click",()=>{
        logPopup.classList.toggle("pop")
    })

    const login1 = document.querySelector("#login1")
    const login2 = document.querySelector("#login2")
    const loginSubmit = document.querySelector("#login3")
    loginSubmit.addEventListener("click", ()=>{
        data.forEach(element => {
            if(element.username == login1.value && element.password == login2.value){
                iflogged = 1;
                console.log(iflogged);
                localStorage.setItem('iflogged', iflogged)
                currentUsername = login1.value
                localStorage.setItem('currentUser',currentUsername)
                location.reload()

            }
        });
    })

    regOpen.addEventListener("click",()=>{
        regPopup.classList.toggle("pop")
    })
    const reg1 = document.querySelector("#reg1")
    const reg2 = document.querySelector("#reg2")
    const regSubmit = document.querySelector("#reg3")
    regSubmit.addEventListener("click", ()=>{
        const userExists = data.find(user=>user.username == reg1.value)
        if(userExists){
                alert("This username has already been taken!")
        }
        else if(!userExists && reg1.value.trim().length>1){
            newObj = {
            username: reg1.value.trim(),
            password: reg2.value.trim()
            }
            axios.post(url+`users/`,newObj)
            // console.log(data);
            location.reload()
            }
            // console.log(reg1.value.trim());
            
    })
})

logOut.addEventListener("click", ()=>{
    iflogged = 0;
    localStorage.setItem('iflogged', iflogged)
    localStorage.setItem('currentUser','')
    location.reload()
})




myCars.addEventListener("click", ()=>{
    window.location.href = "myCars.html#"


})









