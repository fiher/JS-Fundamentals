/**
 * Created by Lucifer on 11-Oct-16.
 */
function solve(arr){
    let data = new Map();
    arr.forEach(function (el) {
        var lineargs = el.trim().split(/\s+$\s+/g);
        var tasks = 'Task' + lineargs[2];
        if(!data[task]){
            data[task] = {
                tasks:[],
                average: 0,
                lines: 0
            };
        }
        data[task].average += Number(lineargs[3]);
        data[task].lines += Number(lineargs[4]);
    });
    Map.keys(data).forEach(function(a, b){
        data[key].average = parseFloat(data[key].average / data[key].tasks.length);
        data[key].tasks.sort(function(a, b){

           return a.name.localeCompare(b.name);
        });
        var keysSorted = Obje

    })

}
solve([ 'Array Matcher & strings & 4 & 100 & 38',
    'Magic Wand & draw & 3 & 100 & 15',
    'Dream Item & loops & 2 & 88 & 80',
    'Knight Path & bits & 5 & 100 & 65',
    'Basket Battle & conditionals & 2 & 100 & 120',
    'Torrent Pirate & calculations & 1 & 100 & 20',
    'Encrypted Matrix & nested loops & 4 & 90 & 52',
    'Game of bits & bits & 5 & 100 & 18',
    'Fit box in box & conditionals & 1 & 100 & 95',
    'Disk & draw & 3 & 90 & 15',
    'Poker Straight & nested loops & 4 & 40 & 57',
    'Friend Bits & bits & 5 & 100 & 81' ])