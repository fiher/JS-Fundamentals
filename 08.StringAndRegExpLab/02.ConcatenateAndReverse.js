/**
 * Created by Lucifer on 30-Sep-16.
 */
function concatenateAndReverse(arr) {
    let allStrings = arr.join('');
    let chars = Array.from(allStrings);
    chars.reverse();
    let revChars = chars.join('');
    console.log(revChars);
}