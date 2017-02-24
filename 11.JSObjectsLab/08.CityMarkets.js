/**
 * Created by Lucifer on 12-Oct-16.
 */
function cityMarkets(input) {
    let total = new Map();
    for(let row of input){
        let [town,product,score] = row.split(/\s*->\s*/);
        let [quantity,price] = score.split(/\s*:\s*/);
        if(!total.has(town)){
            total.set(town,new Map());
        }
        let income = price*quantity;
        let oldincome = total.get(town).get(income);
        if(oldincome){
            income += oldincome;
        }
        total.get(town).set(product,income);
    }
    for(let [town,value] of total){
        console.log("Town - "+town);
        for(let [product,income] of total.get(town)){
            console.log("$$$"+product+" : "+ income);
        }

    }
}

