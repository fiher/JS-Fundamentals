/**
 * Created by Lucifer on 24-Sep-16.
 */
function distanceIn3D(input) {
    let  x1 = input[0];
    let  y1 = input[1];
    let  z1 = input[2];
    let  x2 = input[3];
    let  y2 = input[4];
    let  z2 = input[5];
    let distance = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2) + Math.pow((z2-z1),2));
  //
   console.log(distance);

}
