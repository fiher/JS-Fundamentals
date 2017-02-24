/**
 * Created by Lucifer on 29-Sep-16.
 */
function printString(str) {
    if(Array.isArray(str)){
        str = str[0];}
    for(let i in str){
        console.log(`str[${i}] -> ${str[i]}`);
    }
}