/**
 * Created by Lucifer on 07-Oct-16.
 */
function RemoveAdd(input) {
    let arr = [];
    let num = 0;
    for(let i = 0; i<input.length;i++){

        if(input[i]=='add'){
            num++;
            arr.push(num);
        }
        else if(input[i]=='remove'){
            num++;
            if(arr.length>0){
                arr.pop();
            }
        }
    }
    if(arr.length==0){
        console.log("Empty");
    }
    for( let n of arr){
        console.log(n);
    }
}