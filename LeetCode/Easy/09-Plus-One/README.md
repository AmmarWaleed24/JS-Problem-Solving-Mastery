# 09 - Plus One

## Problem Description
You are given a large integer represented as an integer array `digits`, where each `digits[i]` is the $i^{th}$ digit of the integer. Increment the large integer by one and return the resulting array of digits.

**Example:**
- Input: `digits = [1,2,3]` -> Output: `[1,2,4]`
- Input: `digits = [9,9]` -> Output: `[1,0,0]`

## My Approach
1. Iterate through the array from **right to left**.
2. If the current digit is less than 9, increment it and return the array immediately.
3. If the digit is 9, set it to 0 and continue to the next digit (carrying the 1).
4. If the loop finishes (meaning all digits were 9), use `unshift(1)` to add a 1 at the beginning of the array.

## Complexity
- **Time Complexity:** $O(n)$.
- **Space Complexity:** $O(1)$ when updating in place, or $O(n)$ if a new digit is added.
