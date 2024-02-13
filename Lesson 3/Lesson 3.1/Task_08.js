let metn1 = prompt("Mətn daxil edin!")
let metn2 = ""
let len = metn1.length



for(len;len>0; len--)
{
    metn2 += metn1[len-1]
}

document.write(metn2)