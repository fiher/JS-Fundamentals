/**
 * Created by Lucifer on 30-Sep-16.
 */
function countOccurences([key,text]) {
   let count = 0 ;
    let index = text.indexOf(key);
    while(index >-1){
        count++;
        index = text.indexOf(key,index+1);
    }
    return count;
}