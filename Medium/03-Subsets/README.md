# 03 - Subsets

## Problem Description
Given an integer array `nums` of **unique** elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.

**Example:**
- **Input:** `nums = [1,2,3]`
- **Output:** `[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]`

## My Approach (Cascading)
Instead of a complex recursion, I used the **Cascading** technique which is very intuitive:
1. Start with an empty subset: `[[]]`.
2. Iterate through each number in the input array.
3. For each existing subset, create a new one by adding the current number to it.
4. This effectively doubles the number of subsets at each step.



## Complexity
- **Time Complexity:** $O(n \cdot 2^n)$  
  For each of the $n$ elements, we double the number of subsets, resulting in $2^n$ subsets. Each subset can take $O(n)$ to copy.
- **Space Complexity:** $O(n \cdot 2^n)$  
  To store all $2^n$ subsets.
