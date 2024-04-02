const addbuttonjs = document.getElementById('addbutton')
let i = 0
const doneStatuses = []
let arr= []
let newArr = JSON.parse(localStorage.getItem('birsey'))
console.log(newArr)





// DARK MODE SAVE TEST AND BUTTON SWITCH
let darkness = Number(localStorage.getItem('dark'))
if (darkness == 1){
    document.body.style.backgroundColor = '#202020';
    document.body.style.color = 'white';
    todoInput.style.backgroundColor = 'whitesmoke';}
else if (darkness == 0){
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    todoInput.style.backgroundColor = 'white';}

document.addEventListener('keypress',function(event){
    if (event.key.toLowerCase() === 'y'){
        if(darkness==0){
            document.body.style.backgroundColor = '#202020';
            document.body.style.color = 'white';
            todoInput.style.backgroundColor = 'whitesmoke';
            darkness = 1;
            localStorage.setItem('dark', darkness)

        }
        else if (darkness == 1){
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            todoInput.style.backgroundColor = 'white';
            darkness = 0;
            localStorage.setItem('dark',darkness)          
        }
    }
})





// BUTTON CLICKS AND ETC
addbuttonjs.onclick = () =>{
    const setir = document.createElement('tr')
    const xana = document.createElement('td')
    const xana2 = document.createElement('td')
    const xana3 = document.createElement('td')
    const xana4 = document.createElement('td')


    tbodyID.appendChild(setir)
    setir.appendChild(xana)
    setir.appendChild(xana2)
    setir.appendChild(xana3)
    setir.appendChild(xana4)
    i++
    
    xana.innerText = i
    xana2.innerText = todoInput.value
    xana3.innerText = 'Undone'
    xana4.innerHTML = `<button id=removeButton${i}>Remove</button> <button id=doneButton${i}>Done</button>`
    
    doneStatuses.push('0')
    todoInput.value = ''
    todoInput.focus()

    arr.push(xana.innerText)
    arr.push(xana2.innerText)
    arr.push(xana3.innerText)
    console.log(arr);

    const savedStr = JSON.stringify(arr)
    localStorage.setItem('birsey', savedStr)
    

//DONE AND REMOVE BUTTON WORKING
    const doneButtonjs = document.getElementById(`doneButton${i}`)
    doneButtonjs.onclick = () =>{
    doneButtonjs.parentElement.parentElement.style.backgroundColor = 'green'
    doneButtonjs.parentElement.previousSibling.innerText = 'Done'
    console.log(doneButtonjs.closest('tr').rowIndex)
    arr.splice(Number(doneButtonjs.closest('tr').rowIndex)*3-1,1,"Done")
    const savedStr = JSON.stringify(arr)
    localStorage.setItem('birsey', savedStr)
}

    const removeButtonjs = document.getElementById(`removeButton${i}`)
    removeButtonjs.onclick = () =>{
    arr.splice((doneButtonjs.closest('tr').rowIndex)*3-3,3)
    console.log(arr);
    removeButtonjs.parentElement.parentElement.remove()
    const savedStr = JSON.stringify(arr)
    localStorage.setItem('birsey', savedStr)
}

}





// SAVED DATA BEING REVERTED BACK WITH BUTTON C
document.addEventListener('keypress',function(event){
    let x = 0
    let temparraylength = newArr.length
    while (x<temparraylength/3){
        if (event.key.toLowerCase() === 'c'){
            const setir = document.createElement('tr')
            const xana = document.createElement('td')
            const xana2 = document.createElement('td')
            const xana3 = document.createElement('td')
            const xana4 = document.createElement('td')
            i++
            doneStatuses.push('0')
            tbodyID.appendChild(setir)
            setir.appendChild(xana)
            setir.appendChild(xana2)
            setir.appendChild(xana3)
            setir.appendChild(xana4)



            xana.innerText = newArr[0]
            xana2.innerText = newArr[1]
            xana3.innerText = newArr[2]
            if(xana3.innerText == 'Done')
            {
                xana3.closest('tr').style.backgroundColor = 'green'
            }
            xana4.innerHTML = `<button id=removeButton${i}>Remove</button> <button id=doneButton${i}>Done</button>`



            todoInput.value = ''
            todoInput.focus()
            newArr.splice(0,3)


            arr.push(xana.innerText)
            arr.push(xana2.innerText)
            arr.push(xana3.innerText)
            console.log(arr);

            const savedStr = JSON.stringify(arr)
            localStorage.setItem('birsey', savedStr)


//DONE AND REMOVE BUTTON WORKING WITH BUTTON C
            const doneButtonjs = document.getElementById(`doneButton${i}`)
            doneButtonjs.onclick = () =>{
            doneButtonjs.parentElement.parentElement.style.backgroundColor = 'green'
            doneButtonjs.parentElement.previousSibling.innerText = 'Done'
            console.log(doneButtonjs.closest('tr').rowIndex)
            arr.splice(Number(doneButtonjs.closest('tr').rowIndex)*3-1,1,"Done")
            const savedStr = JSON.stringify(arr)
            localStorage.setItem('birsey', savedStr)
        }

            const removeButtonjs = document.getElementById(`removeButton${i}`)
            removeButtonjs.onclick = () =>{
            arr.splice((doneButtonjs.closest('tr').rowIndex)*3-3,3)
            console.log(arr);
            removeButtonjs.parentElement.parentElement.remove()
            const savedStr = JSON.stringify(arr)
            localStorage.setItem('birsey', savedStr)
        }

        }
        x++
    }

        
})

