const colorsjs = document.querySelectorAll('.colors')
let x = 0;
x = Math.floor(Math.random()*colorsjs.length)
colorsjs.forEach(element => {
    element.style.backgroundColor = element.id
    element.onclick = () =>{
        if(element.id === colorsjs[x].id)
        {
            alert('THE BOMB HAS BEEN DEACTIVATED!')
            clearTimeout(timer1)
        }
    }
});

const timer1 = setTimeout(() => {
    document.write(`BOOOOOOM!!!`)

}, 5000);