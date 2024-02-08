let ad = prompt(`What is your ad?`)
let cins = prompt(`What is your cins?`)
let yas = +prompt("What is your yaş?")
/*
if((cins == "k" || cins == "K") && yas >= 18)
{
    document.write(`Xoş gəlmisiz ${ad} məllım`)
}
else if((cins == "q" || cins == "Q") && yas >= 18)
{
    document.write(`Xoş gəlmisiz ${ad} xanım`)
}
else{
    document.write(`Ya yaşın çatmır, ya da cinsində bozukluk var...`)
}
*/




// Melumat ucun bildirim ki, İİFE sistemini ChatGPTdən soruşdum, yoxsa ternary içində if else heç cürə işləmirdi, çünki sualdan sonra if başlatmaq bir birinə girmiş olurdu.
yas >= 18 ? (() => {
if((cins == "k" || cins == "K"))
{
    document.write(`Xoş gəlmisiz ${ad} məllım`)
}
else if((cins == "q" || cins == "Q"))
{
    document.write(`Xoş gəlmisiz ${ad} xanım`)
}
else{
    document.write(`Cinsində bozukluk var...`)
} })()
: document.write("uşağlara olmaz brat");


