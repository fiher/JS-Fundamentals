/**
 * Created by Lucifer on 28-Sep-16.
 */

    function solve(input){
       for(let i = 0 ; i<input.length; i+=3){
           let x = input[i];
           let y = input[i+1];
           let z = input[i+2];
           if(isInside(x,y,z)){
               console.log('inside');
           }
           else{
               console.log('outside');
           }
       }
    function isInside(x,y,z) {
        let x2 = 50;
        let y2 = 80;
        let z2 = 50;
        let x1 = 10;
        let y1 = 20;
        let z1 = 15;
        if(x>=x1 && x<=x2){
            if(y>=y1&&y<=y2){
                if(z>=z1&&z<=z2){
                    return true;
                }
            }
        }
        return false;
    }

}