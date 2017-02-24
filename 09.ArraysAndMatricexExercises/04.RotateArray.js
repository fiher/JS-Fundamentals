/**
 * Created by Lucifer on 06-Oct-16.
 */
function rotateArray(input) {
    let rotations = Number(input.pop());
    for (i = 0; i < rotations % input.length; i++) {
        input.unshift(input.pop());
    }
    console.log(input.join(' '));
}