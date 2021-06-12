/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const visited = new Set();
  visited.add(0);
  const availableKeys = [rooms[0]];

  while (availableKeys.length > 0) {
    let keysInHand = availableKeys.pop();

    for (let key of keysInHand) {
      if (!visited.has(key)) {
        availableKeys.push(rooms[key]);
        visited.add(key);
      }
    }
  }

  return visited.size === rooms.length;
};
