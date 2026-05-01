# 07 - Search Insert Position

## Problem Description
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

**Constraint:** You must write an algorithm with $O(\log n)$ runtime complexity.

## My Approach
To achieve the $O(\log n)$ requirement, I implemented a **Binary Search** algorithm:
1. Use two pointers, `left` and `right`.
2. Calculate the `mid` point.
3. If `nums[mid]` equals the target, return `mid`.
4. If `target` is greater, move the `left` pointer; otherwise, move the `right` pointer.
5. If the loop ends without finding the target, the `left` pointer will naturally be at the correct insertion index.

## Complexity
- **Time Complexity:** $O(\log n)$ due to Binary Search.
- **Space Complexity:** $O(1)$.
