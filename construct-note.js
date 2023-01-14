/**
 * Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Constraints:

Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:

Examples:

constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true
 */
function constructNote(message, letters) {
    let letter_count = {}

    for(let letter of letters) {
        if (letter in letter_count) {
            letter_count[letter] += 1;
        } else {
            letter_count[letter] = 1;
        }
    }

    for (let letter of message) {
        if (letter_count.hasOwnProperty(letter)) {
            letter_count[letter] -= 1;
            if (letter_count[letter] < 0) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
}

module.exports = {constructNote};
