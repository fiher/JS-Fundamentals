/**
 * Created by Lucifer on 16-Dec-16.
 */
function Airport(input) {
    let town = {};
    let obj = {};
    let airport = [];
    let townsResult = [];
    for(let line of input){
        let id = line.split(" ")[0];
        let towns = line.split(" ")[1];
        let passengerCount = line.split(" ")[2];
        let action = line.split(" ")[3];
        //if(town[towns]==undefined){
        //    if(action!="depart") {
        //        if(airport.indexOf(id)== -1) {
        //            town[towns] = {
        //                name: towns,
        //                arrivals: 0,
        //                departures: 0,
        //                planes: []
        //            };
        //            town[towns]['planes'].push(id);
        //        }
        //    }
        //}else{
        //    if(town[towns]['planes'].indexOf(id)==-1) {
        //        town[towns]['planes'].push(id);
        //    }
        //}
        if(obj[id]== undefined){
            if(action=="land") {
                obj[id] = {
                    town: towns,
                    passengerCount: Number(passengerCount),
                    action: action
                };
                if(town[towns]==undefined){
                    if(action!="depart") {
                        if(airport.indexOf(id)== -1) {
                            town[towns] = {
                                name: towns,
                                arrivals: 0,
                                departures: 0,
                                planes: []
                            };
                            town[towns]['planes'].push(id);
                        }
                    }
                }else{
                    if(town[towns]['planes'].indexOf(id)==-1) {
                        town[towns]['planes'].push(id);
                    }
                }
                town[towns]['arrivals']+=Number(passengerCount);
                airport.push(id);
            }
        }else {
            if (obj[id]['action'] != action) {
                obj[id]['action'] = action;
                if (action == 'land') {
                    if(town[towns]==undefined){
                        town[towns] = {
                            name: towns,
                            arrivals: 0,
                            departures: 0,
                            planes: []
                        };
                        town[towns]['planes'].push(id);
                    }
                    town[towns]['arrivals']+=Number(passengerCount);
                    airport.push(id);
                } else if(action == 'depart') {
                    if(town[towns]==undefined){
                            town[towns] = {
                                name: towns,
                                arrivals: 0,
                                departures: 0,
                                planes: []
                            };
                            town[towns]['planes'].push(id);
                    }
                    town[towns]['departures']+=Number(passengerCount);
                    let filteredAry = airport.filter(e => e !== id);
                    airport = [];
                    for(let plane of filteredAry){
                        airport.push(plane);
                    }
                }
            }
        }
    }
    for(let tows in town){
        let resultObj = {};
        resultObj = town[tows];
        townsResult.push(resultObj);
    }
    airport.sort(function(a, b) {
        let textA = a.toUpperCase();
        let textB = b.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    console.log("Planes left:");
    for(let planes of airport){
        console.log(`- ${planes}`);
    }
    townsResult.sort(function(a, b) {
        let passengersA = a['arrivals'];
        let passengersB = b['arrivals'];
        let result = passengersA-passengersB;
        if(result != 0) {
            return passengersB - passengersA;
        }else{
            let textA = a['name'].toUpperCase();
            let textB = b['name'].toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        }
    });
    for(let obj of townsResult){
        obj['planes'].sort(function(a, b) {
            let textA = a.toUpperCase();
            let textB = b.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });

        console.log(obj['name']);
        console.log(`Arrivals: ${obj['arrivals']}`);
        console.log(`Departures: ${obj['departures']}`);
        console.log("Planes:");
        for(let i=0; i<obj['planes'].length;i++){
            console.log(`-- ${obj['planes'][i]}`);
        }
    }
}

let a = Airport([
    "Boeing474 Madrid 300 land",
    "Boeing474 Madrid 300 depart",
    "Boeing474 Madrid 300 land",
    "Boeing474 Madrid 300 depart",
    "Boeing474 Madri 300 land",
    "Boeing474 Madrid 300 land",
    "Bog474 ***(&^^% 300 land",
    "Boeing474 Madrid 300 depart",
    "Boeing474 Madrid 30 land",
    "boeing474 Madrid 300 land",
    "Boeing474 M 0 depart"
]);
