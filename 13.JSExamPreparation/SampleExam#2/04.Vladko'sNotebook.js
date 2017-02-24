/**
 * Created by Lucifer on 14-Oct-16.
 */
function notebook(input) {
    let result = {};
    let arr = [];
    for(let cow of input){
        let color = cow.split('|')[0];
        arr.push(color);
        arr.sort();

    }
    for(let color of arr){
        if(result[color]== undefined) {
            result[color] = {
                age: '',
                name: '',
                opponents:[],
                loses:0,
                wins:0,
                rank:1
            };
        }
    }
    for(let row of input){
        let [color,type,nameOrAge] = row.split('|');

        if(result[color]== undefined) {
            result[color] = {
                age: '',
                name: '',
                opponents:[],
                loses:0,
                wins:0,
                rank:1
            };
        }
        if(type == 'age'){

            result[color]['age'] = Number(nameOrAge);
        }
        else if(type == 'name'){
            result[color]['name'] = nameOrAge;
        }
        else if(type =='win'){
            result[color]['opponents'].push(nameOrAge);
            result[color]['wins']++;
            result[color]['rank']= ((result[color]['wins']+1)/(result[color]['loses']+1))
                    .toFixed(2);
        }
        else{
            result[color]['opponents'].push(nameOrAge);
            result[color]['loses']++;
            result[color]['rank']=((result[color]['wins']+1)/(result[color]['loses']+1))
                    .toFixed(2);
        }

    }
    for(let prop in result){
        if(result[prop]['name']==''|| result[prop]['age']== ''){
            delete result[prop];
            continue;
        }
        result[prop]['age'] = result[prop]['age'].toString();
        delete result[prop]['wins'];
        delete result[prop]['loses'];
        result[prop]['opponents'].sort();
    }


    console.log(JSON.stringify(result));

}
