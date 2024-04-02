const url = 'https://dummyjson.com/products'
const spaceJS = document.querySelector(".space")

// spaceJS.addEventListener('click',function a() {
//     // document.body.style.backgroundColor = 'blue'
// })



const req = new XMLHttpRequest;
let products = []
req.open("GET", url)
req.onreadystatechange = () =>{
    if(req.readyState == 4){
        const obj = JSON.parse(req.response)
        const arr = obj.products
        arr.forEach(element => {
            const newPrice = Math.round(0.01*element.price*(100 - element.discountPercentage))
            let stars = Math.floor(element.rating)
            let str = ''
            console.log(stars)
            str += 
        `        <div class="card">
        <img src=${element.thumbnail} alt=${element.category} image>
        <h2>Discounted from $${element.price} to $${newPrice}</h2>
        <h4>In stock: ${element.stock}</h4>
        <h4>${element.title}</h4>`
    while(stars>0){
        str += `<img src="star png.png" alt="star" style="height: 30px; width: 30px; margin: 0px;">`
        stars--
    }
    str +=` <h3>${element.rating}/5</h3>
    </div>`
    spaceJS.innerHTML += str;
    });
    }
}
req.send()
