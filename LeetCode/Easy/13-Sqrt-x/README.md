# 13 - Sqrt(x)

## Problem Description
Given a non-negative integer `x`, return the square root of `x` rounded down to the nearest integer. The returned integer should be non-negative as well. Do **not** use any built-in exponent function or operator.

## My Approach
Implemented **Binary Search** between 0 and `x`. We look for an integer `mid` such that `mid * mid` is less than or equal to `x`, while `(mid+1) * (mid+1)` is greater than `x`.

## Complexity
- **Time Complexity:** $O(\log n)$
- **Space Complexity:** $O(1)$
