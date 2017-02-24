/**
 * Created by Lucifer on 26-Sep-16.
 */
function imperialNumbers (input) {
  let inches = Number(input[0]);
    let feet = inches / 12 ;
    feet = Math.floor(feet);
   inches = inches % 12 ;
    console.log(feet+"\'-"+inches+"\"");
}