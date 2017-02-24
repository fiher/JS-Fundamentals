/**
 * Created by Lucifer on 16-Oct-16.
 */
function four(input){
    let result = {};
    let total  = new Map();
    for(let line of input){
        let char = line.split('-');
        if(char[1]){
            total.get(char[0]).set(char[0].get());
            
            
          result[char[0]]['subscribed'] ++;
            result[char[1]]['subscribers']++;
        }
        else{
            if(total.has(line)){
                continue;
            }
            else{
                total.set(person,new Map());
            }
            if(result[line] == undefined){
                result[line] = {
                    subscribed: 0,
                    subscribers: 0
                };
            }

        }
    }
    
     console.log(total);
}
four([ 'A', 'B', 'C', 'D', 'A-B', 'B-A', 'C-A', 'D-A' ]);