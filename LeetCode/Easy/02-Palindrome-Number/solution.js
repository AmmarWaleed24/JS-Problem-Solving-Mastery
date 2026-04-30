/**
 * Problem: Palindrome Number
 * Description: Check if an integer is a palindrome without converting to string.
 * Complexity: Time O(log10(n)) | Space O(1)
 */

function isPalindrome(x) {
    // الأرقام السالبة والأرقام التي تنتهي بـ 0 (ما عدا الـ 0 نفسه) ليست Palindrome
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reversed = 0;
    let original = x;

    while (x > 0) {
        // بناء الرقم المعكوس حسابياً
        reversed = (reversed * 10) + (x % 10);
        x = Math.floor(x / 10);
    }

    // إذا كان الرقم الأصلي يساوي معكوسه، إذن هو Palindrome
    return original === reversed;
}
