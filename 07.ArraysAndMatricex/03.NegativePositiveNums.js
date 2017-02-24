/**
 * Created by Lucifer on 29-Sep-16.
 */
function reorderArray(nums) {
    nums = nums.map(Number);
    let res = [];
    for (let num of nums) {
        if (num < 0) {
            res.unshift(num);
        } else {
            res.push(num);
        }
    }

    return res.join('\n');
}