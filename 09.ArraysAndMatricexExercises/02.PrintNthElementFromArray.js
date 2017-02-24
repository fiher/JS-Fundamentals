/**
 * Created by Lucifer on 06-Oct-16.
 */
function printEveryNthElement(input) {
    let n = Number(input.pop());
    for (let i = 0; i < input.length; i+=n) {
        console.log(input[i]);
    }
}