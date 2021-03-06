/**
 * Created by Lucifer on 14-Oct-16.
 */
function queryStringMess(input) {

   for(let line of input){
       let result = new Map();
       line = line.replace(/(\+|%20)+/g,' ');
       let pattern = '([^&?]+?)=([^&?]+?)(?=&|$)';
       let regex = new RegExp(pattern,'g');
       let match = regex.exec(line);
       while(match){
           let key = match[1].trim();
           let value = match[2].trim();
           if(!result.has(key)){
               result.set(key,[value]);
           }else {
               result.get(key).push(value);
           }
           match = regex.exec(line);
       }
       let output='';
       for(let [key,value] of result){
           output+= `${key}=[${value.join(', ')}]`;

       }
       console.log(output);
   }
}
