let twodigit = +prompt("Ikirəqəmli bir ədəd daxil edin.")
let result = 0;
while(twodigit.length<4)
{
    result += twodigit;
    twodigit += 7;
}
document.write(`Daxil etdiyin ədəddən böyük 2 rəqəmli ədədlərin cəmi ${result} qədər edir. ${twodigit.length}`)
