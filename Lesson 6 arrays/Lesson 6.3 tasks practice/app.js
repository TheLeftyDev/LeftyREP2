// let name1 = prompt('adini de')
// let gender1 = prompt('cinsini de')

// sayhello= (name,gender)=>{
//     if (gender.toLowerCase() === 'k')
//     {return`Salam ${name} bey`}
//     else if(gender.toLowerCase() === 'q')
//     {return `Salam ${name} xanim`}
//     else {return 'A kisi ne yazdin sen'}
// }
// document.write(sayhello(name1,gender1));

// let eded1 = +prompt('eded1i de')
// let eded2 = +prompt('eded2ni de')
// let cem = 0

// const fun = (ed1,ed2) =>{
//     if (ed1<ed2)
//     {
//         while(ed1<ed2)
//         {
//             if(ed1 % 2 == 0)
//             {
//                 cem+=ed1
//             }
//             ed1++
//         }
//     }
//     if (ed2<ed1)
//     {
//         while(ed2<ed1)
//         {
//             if(ed2 % 2 == 0)
//             {
//                 cem+=ed2
//             }
//             ed2++
//         }
//     }
//     return cem
// }

// document.write(fun(eded1,eded2));



// function Namer(x,y) {
//     this.name = x,
//     this.surname = y;
// }
    
// const me = new Namer("Mahir", "Karimli")

// console.log(me);


// let arr = []
// let newArr = []
// let i = 100
// let cem = 0

// while(i >0){
//     arr.splice(0,0,i)
//     i--
// }
// const fun = () =>{
//     arr.forEach(element => {
//         if(element.toString()[0] == 1 || element.toString()[1]==1){
//             newArr.push(element)
//         }
//     });

// return newArr
// }

// fun()
// newArr.forEach(element => {
//     cem += element
// });

// document.write(cem);



// let users = { 
//     name: 'ramin',
//      surname: 'mammadzada'}


// const newUser = (name,surname) =>



// newUser('Adil','Quliyev')

// log


// let x = "Mahir"
// let y = "Karimli"
// const allusers = []
// function NewUser(name,surname) {
//         this.name = name,
//         this.surname = surname;
//     }
        
// const users = new NewUser(x, y)
// allusers.splice(0,0,users)

// console.log(allusers);



// let arr = []

// const createNums = (...nums) =>{
//     arr.push(...nums)
// }


// createNums(52,6,7,4,76,345)
// document.write(arr);


// document.write(arr.sort((a,b)=>(a-b)));




// let arr = []
// const fun = (...hamisirestde) => {
//     arr.push(...hamisirestde)
//     return arr.splice(2,5)
// }

// document.write(fun(4,5,6,7,8,8,7,5,4,5,6,7,7,44));





// function Dolduran(adi,soyadi)
// {
//     this.name = adi,
//     this.surname = soyadi
// }

// const obje = new Dolduran("Inekli","Essek")

// console.log(obje);




// function Product (name,price,quantity)
// {
//     this.adi = name,
//     this.qiymeti = price,
//     this.sayi = quantity
// }

// const sabun = new Product("sabun",4,20)
// const inek = new Product("inek",200,3)
// let arr = []
// arr.push(sabun)
// arr.push(inek)



// console.log(arr);
