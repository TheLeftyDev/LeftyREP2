const addbuttonjs = document.getElementById('addbutton')
let i = 0
const doneStatuses = []
let arr = []


addbuttonjs.onclick = () =>{

// SETRIN YARADILMASI
    tbodyID.innerHTML += 
    `<tr>
    <td>${i}</td>
    <td>${todoInput.value}</td>
    <td>${'Undone'}</td>
    <td>
        <button id=removeButton${i}>Remove</button>
        <button id=doneButton${i}>Done</button>
    </td>
    </tr>`

    const doneButtonjs = document.getElementById(`doneButton${i}`)
    doneButtonjs.onclick = () =>{
    doneButtonjs.parentElement.parentElement.style.backgroundColor = 'green'
    doneButtonjs.parentElement.previousElementSibling.innerText = 'Done'
} 
    const removeButtonjs = document.getElementById(`removeButton${i}`)
    removeButtonjs.onclick = () =>{
    removeButtonjs.parentElement.parentElement.remove()
}

// SETIR ELAVE OLUNANDAN SONRA SIFIRLANANLAR
    i++
    todoInput.value = ''
    todoInput.focus()
    arr = []

    




// TABLE CELLERINI TUTUB HAMISINI ARRAYA ATIR
    tbodycellsjs = document.querySelectorAll('#tbodyID td')
    tbodycellsjs.forEach(cell => {
    arr.push(cell.innerText)
});

console.log(arr);
}


//DONE AND REMOVE BUTTON WORKING





// console.log(tbodyID.innerText.split("\t"))


// arr1 = tbodyID.innerText.split("\t")

