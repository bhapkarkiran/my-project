// assignment 1-5
function fibo(no1:number)
{
    var ans:number=0;
    var a:number=1;
    var b:number=0;
    console.log(a);
    while(ans<no1)
    {
        ans=a+b;
        b=a;
        a=ans;
        console.log(ans);
    }
}
fibo(21);