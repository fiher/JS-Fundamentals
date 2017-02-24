/**
 * Created by Lucifer on 05-Oct-16.
 */
function censorship(input) {
    let text = input.shift();
    for (let bannedWord of input) {
        let regExp = new RegExp(bannedWord, 'g');
        text = text.replace(regExp, match => '-'.repeat(Number(match.length)));
    }

    return text;
}