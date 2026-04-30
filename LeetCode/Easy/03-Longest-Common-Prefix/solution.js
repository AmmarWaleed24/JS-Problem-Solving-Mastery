/**
 * Problem: Longest Common Prefix
 * Description: Find the longest common prefix string amongst an array of strings.
 * Complexity: Time O(S) where S is the sum of all characters | Space O(1)
 */

function longestCommonPrefix(strs) {
    if (!strs.length) return "";

    // نفترض أن الكلمة الأولى هي البداية المشتركة كلها
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        // نختبر هل الكلمة الحالية بتبدأ بالـ prefix اللي معانا؟
        while (strs[i].indexOf(prefix) !== 0) {
            // لو مش بتبدأ بيها، نصغر الـ prefix حرف واحد من الآخر
            prefix = prefix.substring(0, prefix.length - 1);
            
            // لو الـ prefix فضي خالص، يبقي مفيش أي اشتراك
            if (prefix === "") return "";
        }
    }

    return prefix;
}
