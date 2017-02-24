/**
 * Created by Lucifer on 16-Oct-16.
 */
function matrixShit(input) {
    let n = Number(input[0]);
    input =input.map(r => r.split(' ').map(Number));
    let counter = 0;

    let matrix = [];
    let biggerMatrix = [];
    let solveMatrix = [];
    for(let i = 0 ; i<n;i++){
        let currentRow = input[i+1];
        matrix.push(currentRow);
    }
    for(let i = n ; i<input.length;i++){
        if(input[i+1]){
            let currentRow = input[i+1];
            biggerMatrix.push(currentRow);
        }
    }
    let coll = 0;
    let bigRow = 0;
    let bigCol = 0;
    let matrixxCol = 0;
    let rowTurns  = 0;
    for(let matrixRow = 0 ; matrixRow<biggerMatrix.length;matrixRow+=n){
        for(let matrixCol = 0; matrixCol<biggerMatrix[matrixRow].length;matrixCol+=coll){
            for(let i = 0 ; i< n ;i++){
                for(let col = 0 ; col<matrix[i].length;col++){
                    if(matrix[i]!= undefined && biggerMatrix[bigRow]!=undefined) {
                        if(matrix[i][col] != undefined && biggerMatrix[bigRow][bigCol]!= undefined) {
                            let sum = matrix[i][col] + biggerMatrix[bigRow][bigCol];
                            solveMatrix.push(sum);
                        }
                    }
                    matrixxCol = matrixCol;
                    bigCol++;
                    coll = col+1;
                }
                bigCol-=coll;
                bigRow++;
                rowTurns++;
            }
             bigCol+=coll;
            bigRow-=n;
        }
        bigRow+=n;bigCol=0;
    }
    // 0:0 0:1 0:2 0:3 0:4
    // 1:0 1:1 1:2 1:3 1:4
    // 2:0 2:1 2:2 2:3 2:4
    // 3:0 3:1 3:2 3:3 3:4
    // 4:0 4:1 4:2 4:3 4:4
    if(biggerMatrix[2][3]) {
        console.log(biggerMatrix[2][3]);
    }
    console.log(solveMatrix.join(','));


}
matrixShit([ '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22' ]);