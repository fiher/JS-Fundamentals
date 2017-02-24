/**
 * Created by Lucifer on 03-Oct-16.
 */
function split([string,delimeter]) {
    let splittedEelements = string.split(delimeter);
    for(let i = 0 ; i<splittedEelements.length;i++){
        console.log(splittedEelements[i]);
    }
}