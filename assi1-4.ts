// assignment1-4
function Primeno(no1:number)
{
    var cnt:number=0;
    for(var i=2;i<no1;i++)
    {
        if(no1%i==0)
        {
            cnt++;
        }
    }
    if(cnt>0)
    {
        console.log("it is not prime number");
    }
    else{
        console.log("it is a prime number");
    }
}
Primeno(11);