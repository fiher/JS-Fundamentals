/**
 * Created by Lucifer on 30-Sep-16.
 */
function printDollars(input) {
    let n = Number(input[0]);
    for(let i = 1; i<=n;i++){
        console.log('$'.repeat(i));
    }
}