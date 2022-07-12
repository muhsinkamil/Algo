/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
/*     
*
*       1. Find a peak of mountain
*       2. Find the left start point of mountain
*       3. Find the right end point of mountain
*       4. Keep track of length of mountain by subtracting its right and left pointers
*
*/
    
    let result = 0
    
    for(let i = 1; i < arr.length - 1; i++) {
        if(arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            let l = i
            let r = i
            
            while(l - 1 >= 0 && arr[l] > arr[l - 1]) {
                l--
            }
            
            while(r + 1 <= arr.length - 1 && arr[r] > arr[r + 1]) {
                r++
            }
            
            result = Math.max(result, r - l + 1)
        }
    }
    
    return result
};
