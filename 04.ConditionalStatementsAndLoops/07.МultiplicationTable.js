/**
 * Created by Lucifer on 30-Sep-16.
 */
/**
 * Created by Lucifer on 30-Sep-16.
 */
function multipleTable(input) {
    let n = Number(input[0]);
    let html = "<table border=\"1\">";
    html += "<tr><th>x</th>";
    for (let i = 1;i <= n;i++){
        html += `<th>${i}</th>`;
    }
    html += "</tr>";
    for(let i = 1 ; i <= n ; i++){
        html += "<tr>";
        for(let j = 1 ; j<= n;j++){
            if(j==1){
                html += `<th>${i*j}</th>`;
            }
            html += `<td>${i*j}</td>`;
        }
        html+= "</tr>";
    }
    html += "</table>";
    return html;
}