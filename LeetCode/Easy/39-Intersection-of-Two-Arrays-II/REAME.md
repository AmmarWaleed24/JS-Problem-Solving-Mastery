# 39 - Intersection of Two Arrays II

## Problem Description
Given two integer arrays `nums1` and `nums2`, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays.

## My Approach
Used a **Hash Map (Frequency Counter)**:
1. Count frequencies of each number in `nums1`.
2. Iterate through `nums2`, if a number exists in the map and its count > 0, add to results and decrement count.

## Complexity
- **Time Complexity:** $O(n + m)$
- **Space Complexity:** $O(\min(n, m))$
