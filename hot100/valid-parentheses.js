/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    for(let char of s) {
        const len = stack.length;
        if(map[char] && stack[len-1] === map[char]) {
            stack.pop()
        } else {
            stack.push(char)
        }
    }
    if(stack.length === 0) {
        return true
    } else {
        return false
    }
};