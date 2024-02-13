let urek = Math.round(Math.random() * 50);
let test = +prompt(`Ürəyimdə neçə tutmuşam?`);
let cehd = 1;
let kapital = 0;

while(test !== urek)
{
    if(test<urek)
    {test = prompt(`Yuxarı çıx a bala... `)}

    else if(test>urek){
    test = prompt(`Aşağı düş a bala... `)}
    else
    break

    cehd ++;
}

if(cehd===1)
{
    kapital = 1000;
}
else if(cehd>1 && cehd<6)
{
    kapital = 750;
}
else if(cehd>5 && cehd<10)
{
    kapital = 250;
}
else if(cehd>10)
{
    kapital = -250;
}


if(cehd<10) // Bunu sadəcə maraq üçün math.abs işlədim deyə etdim
{
    document.write(`${cehd} dəfəyə tapdın və ${kapital} manat pul qazandın`)
}
else
{
    document.write(`${cehd} dəfəyə tapdın və ${Math.abs(-250)} manat pul itirdin`)
}
