/**
 * Created by Lucifer on 05-Oct-16.
 */
function extractDates(input) {
    let pat = /\b([\d]{1,2})-([A-Z][a-z]{2})-([\d]{4})\b/g;
    let validDates = [], res;
    for (let line of input) {
        while (res = pat.exec(line)) {
            validDates.push(`${res[0]} (Day: ${res[1]}, Month: ${res[2]}, Year: ${res[3]})`);
        }
    }

    return validDates.join('\n');
}
