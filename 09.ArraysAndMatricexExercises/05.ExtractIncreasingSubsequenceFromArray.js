/**
 * Created by Lucifer on 30-Sep-16.
 */
function main(input) {
    let parsedNumbers = input.map((x)=>Number(x));
    let previousNumber = null;
    let filteredNumbers = parsedNumbers.filter(
        function (elem) {
            if (previousNumber == null) {
                previousNumber = elem;
                return true;
            }
            else {
                if (elem >= previousNumber) {
                    previousNumber = elem;
                    return true;
                }
                else {
                    return false;
                }
            }

        }
    )
    console.log(filteredNumbers.join("\n"));
}