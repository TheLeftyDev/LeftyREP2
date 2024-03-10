const addbuttonjs = document.getElementById('addbutton')
let i = 0
const doneStatuses = []
addbuttonjs.onclick = () =>{
    const setir = document.createElement('tr')
    const xana = document.createElement('td')
    const xana2 = document.createElement('td')
    const xana3 = document.createElement('td')
    const xana4 = document.createElement('td')
    i++
    doneStatuses.push('0')
    tbodyID.appendChild(setir)
    setir.appendChild(xana)
    xana.innerText = i
    setir.appendChild(xana2)
    xana2.innerText = todoInput.value
    todoInput.value = ''
    todoInput.focus()
    setir.appendChild(xana3)
    const fun = () =>{
        if(doneStatuses[i-1]>0)
        {return 'Done'}
        else{return 'UnDone'}
    }
    xana3.innerText = fun()
    setir.appendChild(xana4)

    //DONE AND REMOVE BUTTON WORKING
    xana4.innerHTML = `<button id=removeButton${i}>Remove</button> <button id=doneButton${i}>Done</button>`
    const doneButtonjs = document.getElementById(`doneButton${i}`)
    doneButtonjs.onclick = () =>{
    doneButtonjs.parentElement.parentElement.style.backgroundColor = 'green'
    doneButtonjs.parentElement.previousSibling.innerText = 'Done'
}

    const removeButtonjs = document.getElementById(`removeButton${i}`)
    removeButtonjs.onclick = () =>{
    removeButtonjs.parentElement.parentElement.remove()
}



}

