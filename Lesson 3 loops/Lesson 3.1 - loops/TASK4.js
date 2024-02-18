let x = prompt("Neçə faktorialı tapım?");
let result = 1;

while(x>1)
{
    result *=x;
    x--;
}

document.write(result)