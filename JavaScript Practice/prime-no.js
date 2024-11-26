let n = 11;
let fact = 0;
for(let i=1;i<=n;i++)
{
    if(n%i==0)
    fact++;
}
{
    if(fact==2)
        console.log("Given Number is a Prime NUmber");
    else 
        console.log("Given Number is Not a Prime NUmber");
}