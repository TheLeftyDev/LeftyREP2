let aydi = new URL(document.location).searchParams.get("id")
// console.log(aydi);

const test = axios("http://localhost:3000/products/").then((res)=>{
    console.log(res);
    res.data.forEach(element => {
        if(element.id == aydi){
            console.log(element.id);
            document.body.innerHTML += `        <div class="card">
            <img src="${element.link}" alt="car">
            <h2>${element.price} manat</h2>
            <h3>${element.marka} ${element.model} Model</h3>
            <h3>Year:${element.year}</h3>
            <h3>Year:Engine:${element.engine}</h3>
            <h3>Year:Mileage:${element.mileage}</h3>`
        }
    });
})