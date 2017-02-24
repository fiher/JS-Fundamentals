/**
 * Created by Lucifer on 21-Sep-16.
 */
function bottlesAndBoxes(nums){
    let bottles = Number(nums[0]);
    let capacity = Number(nums[1]);
    let boxesNeeded = Math.ceil(bottles/capacity);
    return boxesNeeded;

}