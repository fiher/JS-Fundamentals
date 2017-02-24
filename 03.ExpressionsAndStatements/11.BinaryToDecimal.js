/**
 * Created by Lucifer on 27-Sep-16.
 */
function binaryToDecimal(input) {
    let result = 0 ;
    let firstbinary   = 0;
    firstbinary = firstbinary +Math.pow(Number[input[7]],1);
    let secondbinary  = 0;
    secondbinary = secondbinary +Math.pow(Number[input[6]],2);
    let thirdbinary   = 0;
    thirdbinary = thirdbinary +Math.pow(Number[input[5]],3);
    let fourthbinary  = 0;
    fourthbinary = fourthbinary +Math.pow(Number[input[4]],4);
    let fifthbinary   = 0;
    fifthbinary = fifthbinary +Math.pow(Number[input[3]],5);
    let sixthbinary   = 0;
    sixthbinary = sixthbinary +Math.pow(Number[input[2]],6);
    let seventhbinary = 0;
    seventhbinary = seventhbinary +Math.pow(Number[input[1]],7);
    let eightbinary   = 0;
    eightbinary = eightbinary +Math.pow(Number[input[0]],8);
    
    result = firstbinary + secondbinary + thirdbinary + fourthbinary + fifthbinary + sixthbinary + seventhbinary +eightbinary;
    return result;
}