/**
 * Created by Lucifer on 30-Sep-16.
 */
function aggregateTable(lines) {
 let sum = 0 , list = [];
    for(let line of lines){
        let townData = line.split('|'),
        townNames = townData[1].trim(),
            income = Number(townData[2].trim());
        sum =sum +  income;
        list.push(townNames);
    }
    console.log(list.join(', ')+ '\n'+sum);

}