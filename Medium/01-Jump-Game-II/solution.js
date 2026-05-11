/**
 * Problem: 45. Jump Game II
 * Description: Reach the last index in the minimum number of jumps.
 * Strategy: Greedy Approach
 * Complexity: Time O(n) | Space O(1)
 */

function jump(nums) {
    let jumps = 0;      // عدد القفزات
    let currentEnd = 0; // نهاية المدى للقفزة الحالية
    let farthest = 0;   // أبعد نقطة ممكن نوصل لها

    for (let i = 0; i < nums.length - 1; i++) {
        // بنحدث أبعد نقطة نقدر نوصل لها من مكاننا الحالي
        farthest = Math.max(farthest, i + nums[i]);

        // لو وصلنا لنهاية مدى القفزة الحالية، لازم نقفز
        if (i === currentEnd) {
            jumps++;
            currentEnd = farthest;

            // لو المدى الجديد وصل للآخر، نخرج بدري ونوفر وقت
            if (currentEnd >= nums.length - 1) break;
        }
    }

    return jumps;
}
