let ulduz = +prompt("Ədəd daxil et, ulduzdan hoqqa verəjəm...")
let ulduzsaved = ulduz
let result = ""

while(ulduzsaved>0)
{
    while(ulduz>0)
{
    result+="*"
    ulduz--;
}

document.write(result + "<br>")
ulduzsaved--;
ulduz = ulduzsaved;
result = ""

}



   