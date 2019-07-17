// Assignment 1-1
function Maximum(no1, no2, no3) {
    var Max;
    if (no1 > no2 && no3) {
        Max = no1;
        return Max;
    }
    else if (no2 > no1 && no3) {
        Max = no2;
        return Max;
    }
    else {
        Max = no3;
        return Max;
    }
}
var ans;
ans = Maximum(23, 89, 6);
console.log("Maximum number is:" + ans);
