/**
 * Problem: 07. Unique Paths
 * Description: Find the number of possible unique paths from top-left to bottom-right.
 * Technique: Dynamic Programming (Tabulation)
 * Complexity: Time O(m * n) | Space O(n)
 */

function uniquePaths(m, n) {
    // هنستخدم Row واحد بس عشان نوفر في الـ Space (Space Optimization)
    let row = new Array(n).fill(1);

    // بنمشي على كل الصفوف ما عدا الأول (لأننا مليناه بـ 1)
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            // كل خلية = اللي فوقيها + اللي على شمالها
            row[j] = row[j] + row[j - 1];
        }
    }

    return row[n - 1];
}
