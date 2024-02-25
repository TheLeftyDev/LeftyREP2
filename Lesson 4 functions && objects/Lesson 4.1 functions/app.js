// TASK 1 (3 ad yerinə birbaşa istənilən ad olması üçün belə yazdım)
// let x = prompt("Adınızı daxil edin.")
//  function salamla(name1)
//  {
//     document.write(`${name1} is active now!`)
//  }
//  salamla(x);









// TASK 2
// let x1,x2,x3,x4,x5,result = 0;

// function teyinEden(x1,x2,x3,x4,x5)
// {
//     if(x1>=x2)
//     {result=x1;}
//     else
//     {result=x2;}

//     if(x3>result)
//     {result =x3;}

//     if(x4>result)
//     {result =x4;}

//     if(x5>result)
//     {result =x5;}
//     return result;
// }

// document.write(teyinEden(3,2,5,6,7) + "<br>")
// document.write(teyinEden(5,7,6,8,1) + "<br>")
// document.write(teyinEden(1200,44,255,4,12) + "<br>")










//TASK 3
// let dollar = +prompt("Neçə dolların var brat?")
// let rubl = +prompt("Neçə rublun var brat?")

// const calculating = () => rubl + (dollar*75);
// document.write(calculating())











// TASK 4 proqramçı tənbəl olar, task 2ni kopyalayıb düzəliş etdim buna XD
// let x1,x2,x3,x4,x5,result = 0;

// function min(x1,x2,x3,x4,x5)
// {
//     result = x1;
//     if(x2<result)
//     {result=x2;}

//     if(x3<result)
//     {result =x3;}

//     if(x4<result)
//     {result =x4;}

//     if(x5<result)
//     {result =x5;}
//     return result;
// }

// document.write(min(3,2,5,6,7) + "<br>")
// document.write(min(5,7,6,8,1) + "<br>")
// document.write(min(1200,44,255,4,12) + "<br>")









// TASK 5 versiya 1(əsl versiya)


// let x = +prompt("yaz x")
// let y = +prompt("yaz y")
// let o = prompt("yaz o")
// let res = 0;

// const calc = (a,b) => 
// {
//     if (o == "*")
//     {res = a*b}
//     else if (o == "-")
//     {res = a-b}
//     else if (o == "+")
//     {res = a+b}
//     else if (o == "/")
//     {res = a/b}
//     return res;
// }

// document.write(calc(x,y))









// TASK 5 versiya 2 (funksiyasız və eval ilə XD)
// let x = +prompt("yaz x")
// let y = +prompt("yaz y")
// let o = prompt("yaz o")
// let res = 0;


// res = x+o+y
// document.write (eval(res))




// TASK 6

// let x = prompt("6 Rəqəmli ədəd daxil et!")

// const isLucky = () => {
//     if((Number(x[0])+Number(x[1]) + Number(x[2]))===(Number(x[3])+Number(x[4]) + Number(x[5])))
//     {document.write(Boolean(1))}
//     else
//     {document.write(Boolean(0))}
// }

// isLucky()








// TASK 7
// let x = prompt("Ədəd daxil et!")
// result = 0;
// const isEven = (parakilometr) => {
//     if (parakilometr % 2 === 0)
//     {result = 1;}
//     return result;
// }

// document.write(Boolean(isEven(x)))









// TASK 8
// let metn = prompt("Mətn daxil et!")
// const numCounter = (paralic) => paralic.length
// document.write(numCounter(metn))






// TASK 9
// let eded = prompt("Ədəd daxil et, faktorialını tapım!")
//  const factory_al = (parasantimetr) => {
//     let i = 0;
//     let result = 1;
//     vurulan = parasantimetr;
//     while (i<parasantimetr)
//     {
//         result = result *= vurulan
//         i++;
//         vurulan--;
//     }
//     return result;
//  }
// document.write(factory_al(eded))








//TASK 10 

// let x = prompt("Ədəd daxil et!")
// let result = ""
// const testing = (parametrkvadrati) =>{
//     if(parametrkvadrati > 0)
//     {
//         result = "Pozitiv çıxdı koronanın nəticəsi"
//     }
//     else if(parametrkvadrati == 0){
//         result = "Sükanı belə saxla"       
//     }
//     else{
//         result = "Neqativ çıxdı koronanın nəticəsi"
//     }
//     return result;
// }

// document.write(testing(x))











//TASK 11

// let x = +prompt("Ədəd daxil et!")
// let i = 1;
// let res = 0;
// const checker = (parametrə) =>{
//     while(i < parametrə){
//         if (parametrə % i === 0)
//         {
//         res +=i;
//         }
//         i++;
//     }
//     return Boolean(res == parametrə)
// }

// document.write(checker(x))













//TASK12
// let ayInput = prompt("Hansı ay lazımdı brat sənə?")
// let result = ""

// const ayTapanşik = (paramedic) => {
//     switch(paramedic) {
//     case "yanvar": 
//     case "mart": 
//     case "may": 
//     case "iyul": 
//     case "avqust": 
//     case "oktyabr": 
//     case "dekabr":
//         result = "31 gündü də bilmirsən?"
//     break;
//     case "fevral":
//         result = "Çox vaxt 28 amma ki 4 ildən bir 29"
//     break;
//     default:
//         result = "30 gündü də onu da mən deyim?"}
//     return result;
// }

// document.write(ayTapanşik(ayInput))










//TASK 13 

// let ədəd1 = +prompt("Ədəd 1-i daxil et")
// let ədəd2 = +prompt("Ədəd 2-ni daxil et")

// const əbobTap = (a,b) => {
//     let i = 1;
//     let aCopy1= a;
//     let bCopy1= b;
//     let j = 1;
//     let bolunensayi = 0;
//     let result =1;
//     while (i<a && i<b)
//     {
//         if(a % i == 0 && b % i == 0)
//         {
//             while(j<=i)
//             {
//                 if(i % j == 0)
//                 {
//                     bolunensayi += 1;
//                 }
//                 j++
//             }
//             if(bolunensayi <3)
//             {
//                 while(aCopy1 % i == 0 && bCopy1 % i == 0 && i >1)
//                 {
//                     result = result *=i
//                     aCopy1 = aCopy1/i
//                     bCopy1 = bCopy1/i
//                 }
//             }
//             aCopy1 = a;
//             bCopy1 = b;
//             bolunensayi = 0;
//             j = 1;
//         }
//         i++;
//     }
//     return result;
// }

// document.write(əbobTap(ədəd1,ədəd2))











//TASK 13 QISA VERSİYASI (SONRA BU AĞLIMA GƏLDİ)
// let eded1 = +prompt("Ədəd 1-i daxil et")
// let eded2 = +prompt("Ədəd 2-ni daxil et")
// let res = 0;
// let i = 0;

// if (eded1>=eded2) {i = eded2;}
// else {i = eded1;}
// const ebobtapan = (deyisen1, deyisen2) =>{
//     while(i>0){
//         if(deyisen1 % i == 0 && deyisen2 % i == 0){
//             res = i;
//             break;
//         }
//         i--;
//     }
//     return res;
// }
// document.write(ebobtapan(eded1,eded2))















//TASK 13 SÜNİ İNTELLEKTİN ÇOX MARAQLI ÜSULU
// function calculateGCD(a, b) {
//     while (b !== 0) {
//         const temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }
// const number1 = +prompt("Enter the first number:");
// const number2 = +prompt("Enter the second number:");
// const gcd = calculateGCD(number1, number2);
// document.write(`The GCD of ${number1} and ${number2} is: ${gcd}`);









//TASK 14
// let metn = prompt("Mətn daxil et!")
// let metn2 = ""
// let i = 0

// const tersYazan = (paraleloqram) => {
//     while(i<paraleloqram.length) {
//         metn2 += paraleloqram[paraleloqram.length-(i+1)]
//         i++;
//     }
//     return Boolean(paraleloqram == metn2)
// }

// document.write(tersYazan(metn))







//TASK 15 YOXDU MÜƏLLİM, YAZMAMISIZ BU TASKI ÜMUMİYYƏTLƏ
//TASK 16
// let eded = prompt("Ədədi daxil et")
// const armtest =(deyisen)=>{
//     let i = 0;
//     let result = 0;
//     let toplanan = 1;

//     while(i<deyisen.length){
//         toplanan = deyisen[i]**deyisen.length
//         result += toplanan
//         i++;
//     }
    
//     return Boolean(result == deyisen);
// }

// document.write(armtest(eded))






//TASK 17
// let metn = prompt("Mətn daxil et!")
// let herf = prompt("Hərf daxil et!")

// const herfAxtaran = (axtarilanMetn,axtarilanHerf) => {
//     let i = 0;
//     let result = 0;
//     while(i<axtarilanMetn.length){
//     if(axtarilanMetn[i] == axtarilanHerf)
//     {result++}
//     i++;
//     }
//     return result;

// }

// document.write(herfAxtaran(metn,herf))


//TASK 18
// let birsey = +prompt("Ədəd daxil et!")
// let res = ""
// const isInteger=(parametrkubu) =>{
//     if(parametrkubu === parseInt(parametrkubu))
//     {res = "Düzdü brat integer yazmısan"}
//     else if(parametrkubu === Number(parametrkubu))
//     {res = "Ədəddi amma tamnan ya da ki sən integerin limitini aşmısan"}
//     else{ res = "Əəə bu ədəd döör!"}
//     return res; 
// }
// document.write(isInteger(birsey))






// TASK 19
// let eded = +prompt("Ədəd daxil et!")
// let i = 0;
// let res = 0;
// const reqemCemitapan = (paradox) =>{
//     while(i<paradox.toString().length)
//     {
//         res += Number(paradox.toString()[i])
//         i++;
//     }
//     return res
// }
// document.write(reqemCemitapan(eded))


// TASK 20 - BAŞ ÜSTƏ