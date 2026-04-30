# 02 - Palindrome Number

## Problem Description
Given an integer `x`, return `true` if `x` is a **palindrome**, and `false` otherwise.

**Example:**
- Input: `x = 121` -> Output: `true`
- Input: `x = -121` -> Output: `false` (From left to right, it reads -121. From right to left, it becomes 121-).

## My Approach
I solved this **arithmetically** without converting the number to a string to optimize memory usage:
1. Handle edge cases (negative numbers and numbers ending in zero).
2. Use a `while` loop with modulo `%` and division `/` to reverse the digits of the number.
3. Compare the reversed number with the original input.

## Complexity
- **Time Complexity:** $O(\log_{10}(n))$ because we divide the input by 10 in every iteration.
- **Space Complexity:** $O(1)$ since we only use a few variables regardless of the input size.
