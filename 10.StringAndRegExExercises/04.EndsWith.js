/**
 * Created by Lucifer on 03-Oct-16.
 */
function endsWith([string,str]) {
   let starts = true;
    let splittetString = string.split(" ");
    let splittetStr = str.split(" ");

    for(let i = str.length ; i >0 ; i--){
        if(splittetStr[i]!= splittetString[i]){
            starts = false;
        }
    }
    return starts;
}