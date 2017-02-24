/**
 * Created by Lucifer on 05-Oct-16.
 */
function JSONTable(input) {
    let html = "<table>\n";

    for( let i = 0 ; i<input.length; i++){
        html+= "  <tr>\n";
        let row = JSON.parse(input[i]);
       html+=`    <td>${row.name}</td>\n`;
       html+=`    <td>${row.position}</td>\n`;
       html+=`    <td>${row.salary}</td>\n`;
       html+="  <tr>\n";

    }
    html+="</table>";
console.log(html);
}
