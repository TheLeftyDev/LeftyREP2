// TASK 1
// let adamlar = ["Asif", "Vasif","Ağasif"]
// adamlar.splice(0,1)
// adamlar.splice(2,0,"Ağamirzə")
// document.write(adamlar)

//TASK 2

// let heyvanlar = ["okuz","inek","donuz"]
// heyvanlar.splice(1,1,"classified")
// document.write(heyvanlar)

//TASK 3

// let starwarsmvs = ["New Hope","Empire Strikes back","Return of the Jedi"]
// let i = 4
// for(let x of starwarsmvs)
// {
//     document.write(`Episode ${i}: ${x} <br>`)
//     i++
// }

//TASK 4
// let str = prompt("5 ədədi vergüllə ayırılmış formada daxil et!")
// let adadlar = str.split(",")
// let i = 1
// let resNumber = 0
// const tapan = ()=>{
//     while(i<adadlar.length+1)
//     {
//         if(adadlar[i]> adadlar[resNumber])
//         {
//             resNumber = i;
//         }
//         i++
//     }
//     return `Ən böyük ədəd ${resNumber+1} sırasında dayanan ${adadlar[resNumber]} ədədidir.`

// }



// document.write(tapan())


//TASK 5
// let str = prompt("5 ədədi vergüllə ayırılmış formada daxil et!")
// let adadlar = str.split(",")
// document.write(adadlar.join(";"))