/**
 * Created by Lucifer on 05-Oct-16.
 */
function calculateDiagonalSums(input) {
    let matrix = input.map(r => r.split(' ').map(Number));
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;
    for (let row = 0; row < matrix.length; row++) {
        leftDiagonalSum += matrix[row][row];
        rightDiagonalSum += matrix[row][matrix.length - row - 1];
    }

    console.log(`${leftDiagonalSum} ${rightDiagonalSum}`);
}