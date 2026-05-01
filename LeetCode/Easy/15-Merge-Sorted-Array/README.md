# 15 - Merge Sorted Array

## Problem Description
You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`. Merge `nums2` into `nums1` as one sorted array.

## My Approach
To optimize, I merged them from **back to front**. By comparing the largest elements of both arrays and placing them at the end of `nums1`, we avoid overwriting elements that we haven't checked yet.

## Complexity
- **Time Complexity:** $O(m + n)$
- **Space Complexity:** $O(1)$
