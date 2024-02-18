let x = +prompt("Ədəd daxil et!")
let i = x;
let result = 0;

while(i<1000)
{
    if (i % x == 0 && i>99)
    {
        result += i;
        //document.write(i + "<br>")
    }


    i++;
}
document.write (result)
