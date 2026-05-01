# 14 - Climbing Stairs

## Problem Description
You are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

## My Approach
This is a classic **Dynamic Programming** problem (similar to the Fibonacci sequence). The number of ways to reach step `n` is the sum of ways to reach `n-1` and `n-2`.

## Complexity
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$ (Optimized by using only two variables).
