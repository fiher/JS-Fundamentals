/**
 * Created by Lucifer on 07-Oct-16.
 */
function printNthElementFromArray(input) {

    let step = Number(input[input.length-1]);
    input.pop();

    for(i = 0;i<input.length;i+=step){
        console.log(input[i]);
    }
}
