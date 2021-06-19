/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */

/*
    1. To get the max unit, sort it based on the second param
    2. Load as much unit as we possibly can, while looping.
    3. If the truckSize has come down to zero |or| looped over all available boxes, return result

    Lookup: O(n) solution with bucketSort
*/
var maximumUnits = function (boxTypes, truckSize) {
  let result = 0;

  boxTypes.sort((a, b) => b[1] - a[1]);

  for (box of boxTypes) {
    if (truckSize >= box[0]) {
      result += box[0] * box[1];
      truckSize -= box[0];
    } else {
      result += truckSize * box[1];
      return result;
    }
  }

  return result;
};
