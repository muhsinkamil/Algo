/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  let visited = new Set();

  for (let deadend of deadends) {
    visited.add(deadend);
  }

  q = ["0000"];
  let level = 0;

  while (q.length > 0) {
    n = q.length;

    for (let i = 0; i < n; i++) {
      currentLock = q.shift();

      if (visited.has(currentLock)) {
        continue;
      }

      if (currentLock === target) {
        return level;
      }

      const nextLevel = getNextLevel(currentLock);

      for (let nextLock of nextLevel) {
        if (!visited.has(nextLock)) {
          q.push(nextLock);
        }
      }

      visited.add(currentLock);
    }

    level++;
  }

  return -1;
};

function getNextLevel(currentLock) {
  const locks = new Set();
  let lockChars = [...currentLock];

  for (let i = 0; i < 4; i++) {
    const c = lockChars[i];

    lockChars[i] = c === "0" ? "9" : (parseInt(c) - 1).toString();
    locks.add(lockChars.join(""));

    lockChars[i] = c === "9" ? "0" : (parseInt(c) + 1).toString();
    locks.add(lockChars.join(""));

    lockChars[i] = c;
  }

  return locks;
}
