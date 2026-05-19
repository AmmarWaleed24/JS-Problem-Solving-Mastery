# 08 - Coin Change

## Problem Description
You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.

Return the **fewest number of coins** that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`.

You may assume that you have an infinite number of each kind of coin.

**Example:**
- **Input:** `coins = [1,2,5]`, `amount = 11`
- **Output:** `3`
- **Explanation:** $11 = 5 + 5 + 1$

## My Approach (Dynamic Programming - Bottom-Up)
This problem cannot be solved reliably with a Greedy approach because local optimal choices don't always lead to a global optimal solution. Instead, I used **Dynamic Programming**:

1. **DP Array:** Create a `dp` array where `dp[i]` stores the minimum coins needed to make the amount `i`.
2. **Initialization:** Fill the array with `Infinity` and set `dp[0] = 0`.
3. **Iteration:** For each amount from 1 to `amount`, check every coin. If the coin can be used, update `dp[i] = min(dp[i], 1 + dp[i - coin])`.



## Complexity
- **Time Complexity:** $O(c \cdot a)$ — Where $c$ is the number of coins and $a$ is the amount.
- **Space Complexity:** $O(a)$ — To store the DP table up to the target amount.
