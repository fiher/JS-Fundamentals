/**
 * Created by Lucifer on 16-Oct-16.
 */
function arithmephile(input) {
    input = input.map(Number);
    let arr = [];
    let maxSum = Number.MIN_VALUE;
    for(let n = 0; n<input.length;n++){
        number = input[n];
        let sum = 1;
        if(number>=0&&number<10){
            for(let i = 1; i<=number;i++){
                if(input[n+i]) {

                    sum = sum * input[n + i]
                }
            }
            arr.push(sum);
        }
    }
    for(let number of arr){
        if(number>maxSum){
            maxSum = number;
        }
    }
    console.log(maxSum);
}
arithmephile([ '100', '200', '2', '0', '2', '0', '29399439494', '1', '1' ]);