/**
 * Created by Lucifer on 03-Oct-16.
 */
function startsWith([string,str]) {
     let starts = true ;
    if(string.length<str.length){
        starts = false ;
        return starts;
    }
    let splittetString = string.split(" ");
    let splittetStr = str.split(" ");
    for(let i = 0 ; i < Math.min(splittetStr.length,splittetString.length);i++){
        if(splittetStr[i]!=splittetString[i]){
            starts = false;
        }
    }
    return starts ; 
}