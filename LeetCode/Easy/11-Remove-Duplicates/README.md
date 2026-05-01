# 11 - Remove Duplicates from Sorted Array

## Problem Description
Given a sorted array `nums`, remove the duplicates **in-place** such that each unique element appears only once. The relative order of the elements should be kept the same.

## My Approach
I used the **Two-Pointer** technique:
1. `i` is the slow pointer that tracks the position of unique elements.
2. `j` is the fast pointer that iterates through the array.
3. If `nums[j]` is different from `nums[i]`, we increment `i` and update its value.

## Complexity
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$ (In-place)
