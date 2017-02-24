/**
 * Created by Lucifer on 07-Oct-16.
 */
function main(input) {
let bombBunnies = input.pop().split(" ");
    let matrix = [];
    let snowballDamage = 0;
    let snowBallKills = 0;
    function isInMatrix(matrix,row,col){
        if((row>=0&&row<matrix.length)&&(col>=0&&col<matrix[row].length)){
            return true;
        }
        return false;
    }
    function explode(matrix,bombRow,bombColumn,bombDamage){
        for(let row = bombRow-1 ; row<=bombRow+1;row++){
            for(let col = bombColumn-1;col<=bombColumn+1;col++){
                if(isInMatrix(matrix,row,col)) {
                    matrix[row][col] -= bombDamage;
                }
            }
        }
        return matrix;
    }
    for(let i = 0 ; i<input.length;i++){
        let currentRow = input[i].split(" ").map((x)=>Number(x));
        matrix.push(currentRow);
    }
    for(let i = 0; i<bombBunnies.length;i++){
        let currentBombBunny = bombBunnies[i].split(",").map((x)=>Number(x));

        let bombRow = currentBombBunny[0];
        let bombCol = currentBombBunny[1];

        let bombDamage = matrix[bombRow][bombCol];
        if(bombDamage>0){
            snowballDamage+=bombDamage;
            snowBallKills++;
            explode(matrix,bombRow,bombCol,bombDamage);
        }

    }

    for(let row = 0; row <matrix.length;row++){
        for(let column = 0 ; column<matrix[row].length;column++){
            let currentCell = matrix[row][column];
              if(currentCell >0){
                  snowballDamage += currentCell;
                  snowBallKills++;
              }
        }
    }
    console.log(snowballDamage);
    console.log(snowBallKills);

}