/**
 * Created by Lucifer on 22-Sep-16.
 */
function  primeChecker(n) {
    let prime = true ;
    for(let i = 2 ; i<=Math.sqrt(n); i++){
        if(n%i==0){
            prime = false;
            break;
        }
    }
    return prime && (n>1);
}