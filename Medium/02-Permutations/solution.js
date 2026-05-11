/**
 * Problem: 46. Permutations
 * Description: Given an array nums of distinct integers, return all the possible permutations.
 * Technique: Backtracking (Recursion)
 * Complexity: Time O(n * n!) | Space O(n!)
 */

function permute(nums) {
    const result = [];

    function backtrack(currentPath, remainingNums) {
        // Base Case: لو المسار الحالي طوله نفس طول الأرقام الأصلية، يبقى ده تبديل كامل
        if (currentPath.length === nums.length) {
            result.push([...currentPath]);
            return;
        }

        for (let i = 0; i < remainingNums.length; i++) {
            // 1. اختيار رقم
            currentPath.push(remainingNums[i]);

            // 2. عمل Recursion بالأرقام المتبقية (بدون الرقم اللي اخترناه)
            const nextRemaining = remainingNums.filter((_, index) => index !== i);
            backtrack(currentPath, nextRemaining);

            // 3. Backtrack: شيل الرقم عشان نجرب الاحتمال اللي بعده
            currentPath.pop();
        }
    }

    backtrack([], nums);
    return result;
}
