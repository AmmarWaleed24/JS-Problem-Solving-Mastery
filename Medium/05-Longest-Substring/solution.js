/**
 * Problem: 05. Longest Substring Without Repeating Characters
 * Description: Find the length of the longest substring without repeating characters.
 * Technique: Sliding Window + Hash Map
 * Complexity: Time O(n) | Space O(min(m, n))
 */

function lengthOfLongestSubstring(s) {
    let n = s.length;
    let maxLength = 0;
    let charMap = new Map(); // بنخزن فيه الحرف وآخر مكان ظهر فيه
    let left = 0; // بداية النافذة

    for (let right = 0; right < n; right++) {
        // لو الحرف شفناه قبل كدة وجوه النافذة الحالية
        if (charMap.has(s[right])) {
            // بنحرك بداية النافذة للي بعد مكان الحرف القديم
            left = Math.max(charMap.get(s[right]) + 1, left);
        }

        // بنحدث مكان الحرف في الـ Map
        charMap.set(s[right], right);
        
        // بنحسب طول النافذة الحالية وبناخد الأكبر
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}
