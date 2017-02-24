/**
 * Created by Lucifer on 05-Oct-16.
 */
function findEqualNeighbours(input) {
    let matrix = input.map(r => r.split(' '));
    let counter = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (row + 1 < matrix.length && matrix[row][col] == matrix[row + 1][col])
                counter++;
            if (col + 1 < matrix[row].length && matrix[row][col] == matrix[row][col + 1])
                counter++;
        }
    }

    return counter;
}