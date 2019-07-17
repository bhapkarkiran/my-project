// Assignment 1-1
function Maximum(no1:number,no2:number,no3:number):number
{
    var Max:number;
    if(no1>no2&&no3)
    {
        Max=no1;
        return Max;
    }
    else if(no2>no1&&no3)
    {
        Max=no2;
        return Max;
    
    }
    else{
        Max=no3;
        return Max;
    }
}
var ans:number;
ans=Maximum(23,89,6);
console.log("Maximum number is:"+ans);