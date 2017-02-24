/**
 * Created by Lucifer on 03-Oct-16.
 */
function wordsUppercase([str]) {
    let strUpper = str.toUpperCase();
    let words = extractWords();
    words = words.filter(w => w != '');
    return words.join(', ');
    function extractWords() { return strUpper.split(/\W+/); }
}
