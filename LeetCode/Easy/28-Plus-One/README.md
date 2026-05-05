# 28 - Plus One

## Problem Description
You are given a large integer represented as an integer array `digits`. Increment the large integer by one and return the resulting array of digits.

## My Approach
1. Iterate from the end of the array.
2. If the digit is less than 9, increment it and return.
3. If it's 9, set it to 0 and continue to the next digit (carry over).
4. If all digits are 9, add 1 at the beginning of the array.

## Complexity
- **Time Complexity:** $O(n)$.
- **Space Complexity:** $O(n)$ only if all digits are 9.
