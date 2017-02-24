/**
 * Created by Lucifer on 05-Oct-16.
 */
function cappyJuice(input) {
    let cappyJuice = new Map();
    for(let line of input){
        let [juiceName,juiceValue] = line.split(/\s*=>\s*/);
        if(cappyJuice.has(juiceName)){
            cappyJuice.set(juiceName,cappyJuice.get(juiceName)+ juiceValue);
        }
        else{
            cappyJuice.set(juiceName,juiceValue);
        }
    }
    for(let [key,value]of cappyJuice){
        console.log(`${key}: ${value}`);
    }
}
cappyJuice(['Orange => 2000', 'Peach => 1000','Kiwi => 394']);