/**
 * Created by Lucifer on 05-Oct-16.
 */
let f = arr => arr
    .filter((e, i) => i % 2 != 0)
    .map(e => e * 2)
    .reverse()
    .join(' ');
