let i = 1;
let result = 0;


while(i.toString().length<3)
{
    if(i.toString().length>1 && (i % 2 == 1))
    {
        result += i;
        //document.write(i + "<br>")
        i++;

    }
    else{
        i++;
    }
}
document.write(result + "<br>")
