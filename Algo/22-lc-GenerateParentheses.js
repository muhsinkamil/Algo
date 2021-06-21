/**
 * @param {number} n
 * @return {string[]}
 */

/*
  1. Backtracking:
    - Base case: If the opened brackets is n && closed brackets is n. 
    recursion:
      - if the opened brackets are lesser than the total brackets, add open bracket
      - If the closed brackets is lesser than open brackets, add close brackets and balance it.
*/
var generateParenthesis = function (n) {
  if (n === 0) {
    return [""];
  }

  let result = [];
  generateBalancedParenthesis(result, "", 0, 0, n);
  return result;
};

function generateBalancedParenthesis(result, current, open, close, n) {
  if (open === n && close === n) {
    result.push(current);
    return;
  }

  if (open < n) {
    generateBalancedParenthesis(result, current + "(", open + 1, close, n);
  }

  if (close < open) {
    generateBalancedParenthesis(result, current + ")", open, close + 1, n);
  }
}
