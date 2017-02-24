/**
 * Created by Lucifer on 02-Oct-16.
 */
function calender([day, month, year]) {
    [day, month, year] = [day, month, year ].map(Number);
    let today = new Date(year, month - 1, day);
    let firstDay = new Date(year, month - 1, 1);
    let firstDateOfCalender = new Date(firstDay);
    firstDateOfCalender.setDate(firstDateOfCalender.getDate()-firstDateOfCalender.getDay());

    let lastDateOfCalender = new Date(firstDay);
    lastDateOfCalender.setMonth(lastDateOfCalender.getMonth()+1);
    lastDateOfCalender.setDate(0);

    lastDateOfCalender.setDate(lastDateOfCalender.getDate()+6-lastDateOfCalender.getDay());

    let html = '<table>\n';
    html += '  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n';
    for(let i = firstDateOfCalender; i <=lastDateOfCalender; i.setDate(i.getDate()+1)){
        if(i.getDay() ==0){
            html += '  <tr>';}
        if(i.getFullYear()< firstDay.getFullYear() || i.getMonth()< firstDay.getMonth()){
            html += '<td class="prev-month">${i.getDate())</td>';
        }
        else if(i.getFullYear()> firstDay.getFullYear() || i.getMonth()> firstDay.getMonth()){
            html += '<td class="next-month">${i.getDate())</td>';
        }
        else if(i.getTime()===today.getTime()){
            html += '<td class="today">${i.getDate())</td>';
        }else {
            html += '<td>${i.getDate())</td>';

        }

        if(i.getDay() ==6){
            html += '</tr>\n';}
    }
    html+= '</table>';
    return html;
}
