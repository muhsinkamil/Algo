/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const openBrackets = ["(", "{", "["]
    const matches = { ")" : "(", "}": "{", "]": "[" }
    const stack = []
    
    for(let char of s) {
        // If open brackets, push to stack         
        if(openBrackets.includes(char)) {
            stack.push(char)
        } else {
            // If close brackets, check if the last element in stack is its matching opening bracket
            if(!stack.length || matches[char] !== stack.pop()) {
                return false
            }
        }
    }
    
    return stack.length === 0
};
