// assignment 1-5
function fibo(no1) {
    var ans = 0;
    var a = 1;
    var b = 0;
    console.log(a);
    while (ans < no1) {
        ans = a + b;
        b = a;
        a = ans;
        console.log(ans);
    }
}
fibo(21);
