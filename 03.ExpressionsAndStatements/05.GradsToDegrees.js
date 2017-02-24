/**
 * Created by Lucifer on 26-Sep-16.
 */

function gradsToDegrees(num) {

    num = num * 0.9;
    if(num>=360){
        num = num % 360;
    }
    else if (num <0){
        num = num % 360;
        num = 360 + num  ;
    }

    return num;

}