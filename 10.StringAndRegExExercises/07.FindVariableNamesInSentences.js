/**
 * Created by Lucifer on 03-Oct-16.
 */
function findVariableInSentences([input]) {
    let result = [];
   let pattern = `\\b_([a-zA-Z0-9]+)\\b`;
    let regex = new RegExp(pattern,'g');
    let match = regex.exec(input);

    while(match){
        result.push(match[1]);
        match = regex.exec(input);

    }
    console.log(result.join(','));

}