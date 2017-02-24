/**
 * Created by Lucifer on 27-Sep-16.
 */
function triangleOfStars(input) {
    let n = Number(input[0]);
    for(let i = 0; i < n ;i++){
        console.log("*".repeat(i));
    }
    for(let i = n-1; i>0 ; i--){
        console.log("*".repeat(i));
    }
    
}