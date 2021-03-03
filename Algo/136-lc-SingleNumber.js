/**
 * @param {number[]} nums
 * @return {number}
 */

/*
    1. As the numbers appear only twice, utilising, a ^ a = 0
    2. After looping, the non duplicate will be the left out.
*/

var singleNumber = function(nums) {
    let mask = 0
    for(let num of nums){
        mask = mask ^ num
    }
    return mask
}

console.log(singleNumber([1,2,1,4,2])) // 4