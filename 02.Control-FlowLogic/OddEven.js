/**
 * Created by Lucifer on 22-Sep-16.
 */
function oddEven(num) {
    let rem = num % 2;
    if(rem == 0){
        console.log("even");
    }
    else if (rem == Math.round(rem)) {
        console.log("odd");
    }
    else {
        console.log("invalid");
    }
}