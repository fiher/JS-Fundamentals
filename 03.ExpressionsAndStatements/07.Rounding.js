/**
 * Created by Lucifer on 26-Sep-16.
 */
function rounding([num,precision]) {
    let pre = Number(precision);
    let drop = num.split('.');
    let dr = drop[1];
    return Number(Number(num).toFixed(Math.min(pre,dr.length)));
}