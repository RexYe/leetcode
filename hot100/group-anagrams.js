/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const m = new Map();
    const len = strs.length;
    for(let i=0; i<len; i++) {
        const key = Array.from(strs[i]).sort().join()
        if(!m.has(key)) {
            const arr = [strs[i]]
            m.set(key, arr)
        } else {
            const old = m.get(key)
            old.push(strs[i])
        }
    }
    return Array.from(m.values())
};