# 12 - Remove Element

## Problem Description
Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` **in-place**. The order of the elements may be changed.

## My Approach
Used a single pointer to track the index of elements that are **not** equal to `val`. Every time we find a valid element, we overwrite the position at the pointer and move forward.

## Complexity
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$
