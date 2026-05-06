# 38 - Move Zeroes

## Problem Description
Given an integer array `nums`, move all 0's to the end of it while maintaining the relative order of the non-zero elements. (In-place).

## My Approach
Used **Two Pointers**:
1. `lastNonZeroFoundAt` pointer tracks where the next non-zero should go.
2. Iterate through the array; if the current element is not zero, swap it with the element at `lastNonZeroFoundAt` and increment the pointer.

## Complexity
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$
