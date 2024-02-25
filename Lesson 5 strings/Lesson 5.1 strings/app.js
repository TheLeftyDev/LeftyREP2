//TASK 1
// let x = +prompt(`2 rəqəmli ədəd daxil et!`)
// while(x.toString().length<3){
//     x+=7
// }
// document.write (x)

//**************************************************************************************************************************************** */

//TASK 2

// let x = +prompt(`Neçə dəfə yazım?`)

// while(x>0){
//     document.write(`I know how to use loops <br>`)
//     x--
// }


//**************************************************************************************************************************************** */

//TASK 3

// let adSoyad = prompt(`Adınızı və Soy adınızı daxil edin.`)
// let separatedPoint = adSoyad.indexOf(" ")
// let Ad = adSoyad.slice(0,separatedPoint)
// let Soyad = adSoyad.slice((adSoyad.length-separatedPoint)*(-1))
// document.write(Soyad + " " + Ad)

//**************************************************************************************************************************************** */

//TASK 4

// let numre = prompt(`Nömrə daxil et!`)
// isValidNumber = () => document.write(numre.startsWith("+7") && numre.length === 12)
// isValidNumber()

//**************************************************************************************************************************************** */

//TASK 5
// let metn = prompt(`Metn daxil et!`)
// let i = 0
// let metn2 =``
// const textToNum = () =>{
//     while(i < metn.length)
//     {
//         if(metn[i] == Number(metn[i]))
//         {
//             metn2 += metn[i].toString()
//         }
//         i++
//     }
//     return metn2
// }
// document.write(textToNum())

//**************************************************************************************************************************************** */

//TASK6 (TASK 5-İ KOPYALADIM YENƏ XD)

// let metn = prompt(`Metn daxil et!`)
// let i = 0
// let metn2 =``
// const textToNum = () =>{
//     while(i < metn.length)
//     {
//         if(metn[i] != "!")
//         {
//             metn2 += metn[i].toString()
//         }
//         i++
//     }
//     return `${metn2}!`
// }
// document.write(textToNum())

//**************************************************************************************************************************************** */

//TASK 7

// let metn = prompt(`Metn daxil et!`)
// const capitalizer = () => `${metn[0].toUpperCase()}${metn.slice(1)}`
// document.write(capitalizer())

//**************************************************************************************************************************************** */

//TASK 8

// let metn = prompt(`Metn daxil et!`)
// const capitalizer = () => metn.toUpperCase()
// document.write(capitalizer())

//**************************************************************************************************************************************** */

//TASK 9

// let metn = prompt(`Metn daxil et!`)
// const capitalizer = () => metn.toLowerCase()
// document.write(capitalizer())

//**************************************************************************************************************************************** */

//TASK 10

// let metn = prompt(`Metn daxil et!`)
// const capitalizer = () => `Y${metn.slice(1)}`
// document.write(capitalizer())

//**************************************************************************************************************************************** */

//TASK 11

// let metn = prompt(`Ad və Soy adınızı daxil edin!`)
// let i = 0
// let boslugindexi = 0
// const metniduzelt = () =>{
//     while(i < metn.length){
//     if(metn[i] == " ")
//         {
//             boslugindexi = i
//             break
//         }
//     i++
//     }  
// return `${metn.slice(0,1)}. ${metn.slice(i)}`
// }
// document.write(metniduzelt())

//**************************************************************************************************************************************** */


//TASK 12
// let metn = prompt(`Mailinizi daxil edin!`)
// document.write(Boolean(metn.endsWith("@gmail.com")))

//**************************************************************************************************************************************** */

//TASK 13

// let metn = prompt(`Metn daxil edin!`)
// document.write(Boolean(metn.toUpperCase() === metn))

//**************************************************************************************************************************************** */

//TASK 14

// let metn = prompt(`Metn daxil edin!`)
// const bunaFunksiyaYazallar = () => metn.slice(0,5)
// document.write(bunaFunksiyaYazallar())

//**************************************************************************************************************************************** */

//TASK 14 NOOOOOOOOOOOB METHODDDDDD

// let metn = prompt(`Metn daxil edin!`)
// let metn2 = ""
// let i = 0;
// const cumledeNeqederBosluqVarsaHamisiniBirceBirceTireyeCevirenXDDDD = () =>{
//     while(i < metn.length)
//     {
//         if(metn[i] === " ")
//         {
//             metn2+= "-"
//         }
//         else{
//             metn2 += metn[i]
//         }
//         i++
//     }
//     return metn2
// }
// document.write(cumledeNeqederBosluqVarsaHamisiniBirceBirceTireyeCevirenXDDDD())

//**************************************************************************************************************************************** */

//TASK 15 PRO METOD B)

// let metn = prompt(`Metn daxil edin!`)
// let i = 0;
// const cumledeNeqederBosluqVarsaHamisiniBirceBirceTireyeCevirenXDDDD = () =>{
//     //  metn = metn.replace(" ", "-") - Mən normalda bunu loopa salacaqdım ki təkrarlasın və hamısını düzəltsin amma
//     // sən demə daha qısa yol var imiş. G global edirmiş bunu.
//     return metn.replace(/ /g, "-")
// }
// document.write(cumledeNeqederBosluqVarsaHamisiniBirceBirceTireyeCevirenXDDDD())
