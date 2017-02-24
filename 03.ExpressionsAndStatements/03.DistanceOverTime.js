/**
 * Created by Lucifer on 22-Sep-16.
 */
function distanceOverTime([v1,v2,t]) {
    v1 = Number(v1);
    v2 = Number(v2);
    t = Number(t);
    v1 = v1 * 1000;
    v1 = v1 / 3600;
    v2 = v2 * 1000;
    v2 = v2 / 3600;
    let s1 = v1*t;
    let s2 = v2*t;
    let distance = Math.abs(s1-s2);
    console.log(distance);
}