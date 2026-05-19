/**
 * Problem: 08. Coin Change
 * Description: Find the fewest number of coins needed to make up a given amount.
 * Technique: Dynamic Programming (Bottom-Up)
 * Complexity: Time O(c * a) | Space O(a) [c: coins count, a: amount]
 */

function coinChange(coins, amount) {
    // بنعمل مصفوفة حجمها (amount + 1) وبنملاها بقيمة افتراضية كبيرة (Infinity)
    let dp = new Array(amount + 1).fill(Infinity);
    
    // الحل البديهي: عشان تعمل مبلغ 0 محتاج 0 عملات
    dp[0] = 0;

    // بنمشي على كل المبالغ من 1 لحد الرقم المطلوب
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            // لو العملة الحالية أصغر من أو تساوي المبلغ اللي بنحسبه
            if (i - coin >= 0) {
                // بناخد القيمة الأقل: إما القيمة القديمة أو (1 + عدد العملات للمبلغ المتبقي)
                dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
            }
        }
    }

    // لو الخانة الأخيرة لسه بـ Infinity، يبقى مستحيل نكون المبلغ ده بالعملات المتاحة
    return dp[amount] === Infinity ? -1 : dp[amount];
}
