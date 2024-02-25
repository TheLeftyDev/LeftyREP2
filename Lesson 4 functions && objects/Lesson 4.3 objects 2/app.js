//TASK 1


// let mymarka = "Samsung"
// let mymodel = "S24 Ultra"
// let myyear = 2024
// let mychip = "Snapdagon 8Gen3"





// function phonefiller(marka,model,year,chip) {
//     this.marka = marka;
//     this.model = model;
//     this.year = year;
//     this.chip = chip;
// }

// const phone = new phonefiller(mymarka,mymodel,myyear,mychip)
// const phone2 = new phonefiller("OnePlus","10 Pro",2022,"Snapdragon 8Gen1")
// const phone3 = new phonefiller("Pixel","8 Pro",2023,"Tensor G3")

// console.log(phone,phone2,phone3)


// -------------------------------------------------------------------------------------------------------


//TASK 2

// const user1 = {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496"
//       }
//     }}

// const user2 = user1;
// user2.name = "Birsey"
// user1.username ="Ikisey"

// console.log(user2);

// Adresləri eyniləşdirildiyi üçün birinə edilən 
// dəyişiklik birbaşa digərini də dəyişir və nəticədə 
// hər iki dəyişiklik hər ikisinə olunur.


//TASK 3
/*
Object assign sadəcə olaraq iki obyektin içərisində olan məlumatların birindən digərinə assign olunub öz adresslərinin fərqli olaraq saxlanması üçün istifadə olunur.

*/

//TASK 4

/**
Obyektə məlumatların daxil edilməsi üçün istifadə olunan spreaddir və ayırmaq deməkdir. 
Hər ikisi yazılış olaraq eyni olsa da (...) funksiyasaları fərqlidir. 
Məsələn rest "digərləri" formasında da istifadə edilə bilir. Məsələn a, b, c, ...others) 
formasında othersa bütün digər valueular mənimsədilir.
 */






// --------------------------------------------------------------------------------------------------------------------------------------
//TASK 5 sual bunumu istəyir ya başqa birşeymi tam anlaya bilmədim

// let prName = "continent"
// const japan = {
//     continent: "Asia",
//     country: "Japan"
// }

// const Germany = {
//     continent: "Europe",
//     country: "Germany"
// }
// const propertyTaker = (obj,propertyName) =>{
//     console.log(obj);
//     console.log(propertyName);
// }

// console.log(propertyTaker(japan,prName));
// console.log(propertyTaker(Germany,prName));



// --------------------------------------------------------------------------------------------------------------------------------------



//TASK 6

/*

Heap məlumatların RAMda adress olaraq yerləşdirilən və non-primitive(object) məlumatlarının yerləşdiyi yerdir. Primitive valuelar sadəcə value-nu özündə mənimsədir
və buna görə də stack hissəsində yaddaşda saxlanılır. Buna görə də müqayisə ediləndə stack-ların valueları bərabər olduqda özləri də bərabər olmuş olur lakin heapdəkilər
isə eyni valuelar daşısalar da öz adressləri fərqli olduğu üçün sistem tərəfindən bərabər hesaba alınmırlar.
*/



// --------------------------------------------------------------------------------------------------------------------------------------

//TASK 7


// object1 = {
//     c: 5,
//     b: 4,
//     a: 7,
//     d:7,
//     e:6
// }

// object2 = {
//     c: 5,
//     b: 4,
//     m: 0,
//     d:7,
//     e:6
// }
// let res = 0;

// let string1 = `a`


// const existAndTruthy = (obj,str) => {
//     for(let key in obj)
//     {
//         if(key == str && Boolean(obj[key]) == true){
//             console.log(`true ${obj[key]} <br>`)
//             res =1;
//         }
//         else if(key == str && Boolean(obj[key]) == false){
//             console.log(`false ${obj[key]} <br>`)
//         }
//     }
// }
// existAndTruthy(object1,string1);
// existAndTruthy(object2,"m");
