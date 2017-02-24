/**
 * Created by Lucifer on 04-Oct-16.
 */
function townsToJSON(towns) {
    let townsArr = [];
    for(let town of towns.slice(1)){
        let [empty, name, lat, lng] = town.split(/\s*\|\s/)
            .map(t => t.trim())
            .filter(t=>t=='');
        let obj = {Town: name,
            Latitude: lat,
            Longitute: lng
        };
        townsArr.push(townsObj);
    }
    return JSON.stringify(townsArr);
}
