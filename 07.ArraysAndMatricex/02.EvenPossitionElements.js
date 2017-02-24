/**
 * Created by Lucifer on 29-Sep-16.
 */
function evenPositionElements(arr) {
    let result = [];
    for(let i in arr){
         if(i%2==0){
             result.push(arr[i]);
         }
    }
    return result.join(' ');
}