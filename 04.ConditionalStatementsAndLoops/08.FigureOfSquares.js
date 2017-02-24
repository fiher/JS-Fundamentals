/**
 * Created by Lucifer on 02-Oct-16.
 */
function figureOfSquares(n) {

    console.log("+"+"-".repeat(n-2)+"+"+"-".repeat(n-2)+"+");
    if(n==2){
        return;
    }
    if(n%2==0){

            for(let j = 0 ; j<(n-4)/2;j++){
                console.log("|"+" ".repeat(n-2)+"|"+" ".repeat(n-2)+"|")
            }
        console.log("+"+"-".repeat(n-2)+"+"+"-".repeat(n-2)+"+");
        for(let j = 0 ; j<(n-4)/2;j++){
            console.log("|"+" ".repeat(n-2)+"|"+" ".repeat(n-2)+"|")
        }
    }
    else{
        for(let i = 0 ; i<(n-3)/2;i++){
            console.log("|"+" ".repeat(n-2)+"|"+" ".repeat(n-2)+"|");
        }
        console.log("+"+"-".repeat(n-2)+"+"+"-".repeat(n-2)+"+");
        for(let i = 0 ; i<(n-3)/2;i++){
            console.log("|"+" ".repeat(n-2)+"|"+" ".repeat(n-2)+"|");
        }
    }
    console.log("+"+"-".repeat(n-2)+"+"+"-".repeat(n-2)+"+");
}
figureOfSquares(80);