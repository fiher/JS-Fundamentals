/**
 * Created by Lucifer on 16-Dec-16.
 */

function buildWall(input) {
    let price = 1900;
    let cubicTotal = 0;
    let arr = input.map(Number);
    let result = [];
    let cubicResult = [];
    let n = 0;
    let cubicToPrint = '';
    while (true) {
        cubicToPrint = '';
        result = [];
        let arr2 = [];
        let cubic = 0;
        for (let number of arr) {
            //console.log(arr);
            if (number < 30) {
                result.push(number);
            }
            arr2.push(number);
        }
        if (result.length == 0) {
            break;
        }
        for (let number of result) {
            //console.log(result);
            number++;
            cubic += 195;
        }
        cubicResult.push(cubic);
        cubicTotal += cubic;
        arr = [];
        for (let number of arr2) {
            number++;
            arr.push(number);
        }
    }
    let total = cubicTotal*price;
    for(let cubic of cubicResult){
        cubicToPrint += `${cubic}, `;
    }
    let fuckThisShit = cubicToPrint.trim();
    let fuck = fuckThisShit.substring(0, fuckThisShit.length - 1);
    console.log(fuck);
    console.log(`${total} pesos`);
}