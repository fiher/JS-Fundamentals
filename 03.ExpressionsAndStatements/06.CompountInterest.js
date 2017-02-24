/**
 * Created by Lucifer on 26-Sep-16.
 */
function compountInterest(input) {
    let p = Number(input[0]);
    let i = Number(input[1]);
    let n = Number(input[2]);
    let t = Number(input[3]);
    n = 12/n ;
    i = i / 100;
    let sum = p*Math.pow((1 + i/n),n*t);
    sum = sum.toFixed(2);
    return sum;
}