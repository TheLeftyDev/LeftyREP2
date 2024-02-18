let boy = prompt("Boyunuzu cm ilə daxil edin!")
let çəki = prompt("Çəkinizi kg ilə daxil edin!")
let bmi = çəki/((boy/100)**2)



if(bmi<18.5)
{
    document.write("Arıqsan a bala...")
}
else if(bmi>=18.5 && bmi<25)
{
    document.write("Normalsan əşi kef elə...")
}
else if(bmi>=25 && bmi<30)
{
    document.write("Köksən a bala...")
}
else if(bmi>=30)
{
    document.write("OBESE!!!")
}
else
{
    document.write("Nə yazdın sən a bala...")
}
