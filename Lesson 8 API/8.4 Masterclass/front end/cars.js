const homeBtn = document.querySelector('#homeBtn')
const addCarBtn = document.querySelector('#addCarBtn')
const addCarPopup = document.querySelector('.addCarPopup')
const logOutBtn = document.querySelector('#logOutBtn')
const cardSpaceJS = document.querySelector('.cardSpace')
if (localStorage.getItem('currentUser') == null || localStorage.getItem('currentUser') == ''){
    currentUsername = ''
}
else{
    currentUsername = localStorage.getItem('currentUser')
}

let CarObj = {}
const url = "http://localhost:3000/"
const dataJS = axios(url+`products/`).then((res)=>{
    console.log(res.data);
    res.data.forEach(element => {
        if(element.addedby == currentUsername){
            cardSpaceJS.innerHTML += `        <div class="card">
            <img src="${element.link}" alt="car">
            <h2>${element.price} manat</h2>
            <h3>${element.marka} ${element.model} Model</h3>
            <h3>Year:${element.year}</h3>
            <h3>Year:Engine:${element.engine}</h3>
            <h3>Year:Mileage:${element.mileage}</h3>`
        }
    });
})

homeBtn.addEventListener('click', ()=>{
    window.location.href = "index.html#"
})

addCarBtn.addEventListener('click', ()=>{
    addCarPopup.classList.toggle('pop')
})



const marka = document.querySelector('#marka')
const model = document.querySelector('#model')
const year = document.querySelector('#year')
const engine = document.querySelector('#engine')
const mileage = document.querySelector('#mileage')
const price = document.querySelector('#price')
const link = document.querySelector('#link')
const Add = document.querySelector('#add')
Add.addEventListener('click', ()=>{
    CarObj = {
        marka: marka.value,
        model: model.value,
        year: year.value,
        engine: engine.value,
        mileage: mileage.value,
        price: price.value,
        link: link.value,
        addedby: currentUsername
    }
    console.log(url);
    axios.post(url+`products/`,CarObj)
    location.reload()
})



setInterval(() => {
    console.log(currentUsername);
}, 2000);

logOutBtn.addEventListener("click",()=>{
    iflogged = 0;
    localStorage.setItem('iflogged', iflogged)
    currentUsername = ''
    localStorage.setItem("currentUser",currentUsername)
    window.location.href = "index.html#"
    
})