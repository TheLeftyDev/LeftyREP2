//TASK 1
// const x = document.getElementById("x")
// const y = document.getElementById("y")
// const o = document.getElementById("o")

// const button = document.getElementById("btn1")
// button.onclick = () =>{
//     if (o.value == '+')
//     {
//     alert(Number(x.value)+Number(y.value))
//     }
//     else if (o.value == '-')
//     {
//     alert(Number(x.value)-Number(y.value))
//     }
//     else{
//     alert("Qardaş bircə toplama-çıxmanı billəme mən...")
//     }
// }


//TASK2

// const buttonsContainer = document.querySelector('.buttonsContainer')
// const buttons = buttonsContainer.querySelectorAll('button')

// buttons.forEach(button => {
//     button.style.color = "white"
//     button.style.backgroundColor = button.id
//     button.onclick =() =>{
//         document.body.style.backgroundColor = button.id
//     }
// });



//TASK3

const reng = prompt("Ingilisce bir reng yaz!")
const circles = document.querySelectorAll('.circlesContainer .circle')

circles.forEach(circle => {
    circle.onclick =() =>{
        circle.style.backgroundColor = reng
    }
});