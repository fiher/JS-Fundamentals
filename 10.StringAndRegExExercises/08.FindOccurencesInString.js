/**
 * Created by Lucifer on 03-Oct-16.
 */
function findOccurencesInString([string,key]) {
    let result = [];

    let pattern = `\\b${key}\\b`;
    let regex = new RegExp(pattern,'gi');
    let match  = regex.exec(string);
    while(match){
        result.push(match);
        match = regex.exec(string);
    }
    console.log(result.length);
}