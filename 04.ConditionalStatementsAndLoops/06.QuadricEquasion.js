/**
 * Created by Lucifer on 30-Sep-16.
 */
function quadricEquasion(input) {
    let [a,b,c] = input.map(Number);
    let D = Math.pow(b,2) - 4*a*c;
    if(D >0){
        let x1 = (-b + Math.sqrt(D))/(2*a);
        let x2 = (-b - Math.sqrt(D))/(2*a);
        return x2 + "\n"+x1;
    }
    else if(D==0){
        let x1 = (-b + Math.sqrt(D))/(2*a);
        return x1;

    }
    else{
        return"No";
    }
}