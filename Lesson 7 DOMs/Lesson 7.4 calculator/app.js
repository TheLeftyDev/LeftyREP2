const cbsjs = document.querySelectorAll('.calculator .cb')
const screen = document.getElementById('screen')
let sign = 0;
cbsjs.forEach(element => {
    element.onclick = () =>{
        if(element.innerText != '=' && Number(element.innerText) == Number(element.innerText)){
        screen.innerText += element.innerText
        sign = 0
        }
    else if(element.innerText == '=' ){
        screen.innerText = eval(screen.innerText)
        sign =0
    }
    else if(sign ==0) {
        screen.innerText += element.innerText
        sign = 1
    }
    
    }    
});
