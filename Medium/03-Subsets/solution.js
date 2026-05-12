/**
 * Problem: 03. Subsets (Power Set)
 * Description: Given an integer array nums of unique elements, return all possible subsets.
 * Technique: Cascading / Backtracking
 * Complexity: Time O(n * 2^n) | Space O(n * 2^n)
 */

function subsets(nums) {
    const result = [[]]; // بنبدأ بمجموعة فاضية لأنها دايمًا جزء من الحل

    for (let num of nums) {
        const n = result.length;
        for (let i = 0; i < n; i++) {
            // لكل مجموعة موجودة حاليًا، بنضيف نسخة منها مع الرقم الجديد
            result.push([...result[i], num]);
        }
    }

    return result;
}
