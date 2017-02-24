/**
 * Created by Lucifer on 03-Oct-16.
 */
function CookingByNumber(input) {
    let n = Number(input[0]);
    for(let i = 1 ; i <input.length;i++){
        if(input[i]== "chop"){
            n = n/2;
            console.log(n);
        }
        else if (input[i]=="dice"){
            n = Math.sqrt(n);
            console.log(n);
        }
        else if (input[i]== "spice"){
            n++;console.log(n);
        }
        else if(input[i]=="bake"){
            n= n*3;console.log(n);
        }
        else if(input[i]=="fillet"){
            n = n*0.80;console.log(n);
        }
    }
}