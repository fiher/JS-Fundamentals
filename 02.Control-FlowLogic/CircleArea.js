/**
 * Created by Lucifer on 21-Sep-16.
 */
function circleArea(r) {

    let area = r*r*Math.PI;
    console.log(area);
    let roundedArea = Math.round(area*100)/100;
    console.log(roundedArea);
}