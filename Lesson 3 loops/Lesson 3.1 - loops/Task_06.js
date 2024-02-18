let x = prompt("Ədəd daxil et!")
let testednumber = x;
let testednumber2 =testednumber;
let neceseinebolunur = 0;

while(testednumber>0)
{
    while(testednumber2>0)
{
    if(testednumber % testednumber2 == 0)
    {
        neceseinebolunur++;
        testednumber2--;
    }
    else
    {
        testednumber2--;
    }
}

if(neceseinebolunur == 2 || neceseinebolunur == 1)
{
    document.write(testednumber + "<br>")

}
testednumber--;
testednumber2=testednumber;
neceseinebolunur=0;
}