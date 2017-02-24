/**
 * Created by Lucifer on 16-Dec-16.
 */
function extract(input){
    let spice = Number(input[0]);
    let days = 0;
    let totalSpice = 0;
    let drink = 26;
    let end = 26;
    while(spice>=100){
        totalSpice+=spice;

        totalSpice-=drink;
        if(totalSpice<0){
         totalSpice=0;
        }
        days++;
        spice-=10;
    }
    totalSpice-=end;
    if(totalSpice<0){
        totalSpice=0;
    }
    console.log(days);
    console.log(totalSpice);
}