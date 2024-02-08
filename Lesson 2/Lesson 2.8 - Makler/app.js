let kvadrati = +prompt(`Evin kvadratı neçəyədir?`)
let qiymeti = +prompt(`How much is the evin qiyməti`)
let valyuta = prompt("Currency-si nədi?")




// Burda da ChatGPT-dən x.toLowerCase()-i öyrəndim.
if(kvadrati > 2000 && qiymeti===99999 && (valyuta.toLowerCase() == "azn" || valyuta.toLowerCase() =="manat"))
{
    document.write(`Alıram bu lənətəgəlmiş evi`)
}
else{
    document.write(`Bi köpüy də verən dörəm o evə...`)
}




