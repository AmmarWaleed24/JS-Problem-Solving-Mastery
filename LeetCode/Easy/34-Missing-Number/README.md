# 34 - Missing Number

## Problem Description
Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the only number in the range that is missing from the array.

## My Approach
Using **Mathematics (Gauss Formula)**:
1. Calculate the expected sum of numbers from 0 to n: $Sum = \frac{n(n+1)}{2}$.
2. Subtract the actual sum of the array from the expected sum.
3. The result is the missing number.

## Complexity
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$
