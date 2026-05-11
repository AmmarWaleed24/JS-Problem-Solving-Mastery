# 01 - Jump Game II

## Problem Description
You are given an array of non-negative integers `nums`, where each element represents your maximum jump length at that position. Your goal is to reach the last index in the **minimum number of jumps**.

**Example:**
- **Input:** `nums = [2,3,1,1,4]`
- **Output:** `2`
- **Explanation:** Jump 1 step from index 0 to 1, then 3 steps to the last index.

## My Approach (Greedy)
Instead of trying every possible jump (Backtracking), I used a **Greedy** approach to find the most efficient path:
1. **Farthest:** Always calculate the maximum distance we can reach from the current window.
2. **Current End:** When we reach the end of our current "jump range", we increment the jump count and set the new range to the `farthest` point found.
3. This ensures we cover the maximum ground with each jump.

## Complexity
- **Time Complexity:** $O(n)$ — Single pass through the array.
- **Space Complexity:** $O(1)$ — No extra data structures used.
