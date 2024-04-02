const url = 'http://localhost:3000/products'
const spaceJS = document.querySelector(".space")
const removeUser = (theID)=>{
axios.delete(`${url}/${theID}`)
location.reload()
}

addButton = document.querySelector(".addButton")

linkJS= document.getElementById('link')
markaJS= document.getElementById('marka')
qiymetJS= document.getElementById('qiymet')
adJS= document.getElementById('ad')
ratingJS= document.getElementById('rating')
endirimJS= document.getElementById('endirim')

addButton.onclick = ()=>{

    console.log(linkJS.value);
    const objAdd = {
        marka: markaJS.value,
        ad: adJS.value,
        qiymet: qiymetJS.value,
        endirim: endirimJS.value,
        rating: ratingJS.value,
        link: linkJS.value
    }
    axios.post(`${url}`,objAdd)
    location.reload()
}



async function something(){
    const result = await axios(url)
    arr = result.data
    arr.forEach(element => {
        const newPrice = Math.round(0.01*element.qiymet*(100 - element.endirim))
        let stars = Math.floor(element.rating)
        let str = ''
        str += 
    `        <div class="card">
    <img src=${element.link} alt=${element.marka} image>
    <h2>Discounted from $${element.qiymet} to $${newPrice}</h2>
    <h4>${element.marka} ${element.ad}</h4>    `
    
while(stars>0){
    str += `<img src="star png.png" alt="star" style="height: 30px; width: 30px; margin: 0px;">`
    stars--
}
str +=` <h3>${element.rating}/5</h3>
<button style="background-color: red;" onclick = "removeUser('${element.id}')">remove</button>
<br></br>
</div>`
spaceJS.innerHTML += str;
});
}
something()

