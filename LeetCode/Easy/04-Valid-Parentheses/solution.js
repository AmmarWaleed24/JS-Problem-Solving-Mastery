/**
 * Problem: Valid Parentheses
 * Description: Determine if the input string has valid brackets using a Stack.
 * Complexity: Time O(n) | Space O(n)
 */

function isValid(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        // لو القوس اللي عليه الدور هو قوس قفل
        if (map[char]) {
            // نطلع آخر قوس اتفتح من الـ Stack
            const topElement = stack.length === 0 ? '#' : stack.pop();
            
            // لو القوس اللي طلع مش هو اللي بيقفل القوس الحالي يبقى غلط
            if (topElement !== map[char]) {
                return false;
            }
        } else {
            // لو قوس فتح، نحطه في الـ Stack
            stack.push(char);
        }
    }

    // في الآخر لازم الـ Stack يكون فاضي لو كل الأقواس اتقفلت صح
    return stack.length === 0;
}
