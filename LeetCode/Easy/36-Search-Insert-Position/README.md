# 36 - Search Insert Position

## Problem Description
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. You must write an algorithm with $O(\log n)$ runtime complexity.

## My Approach
Since the requirement is $O(\log n)$ and the array is sorted, I used **Binary Search**:
1. Initialize `low = 0` and `high = nums.length - 1`.
2. While `low <= high`:
   - Calculate `mid`.
   - If `nums[mid] === target`, return `mid`.
   - If `nums[mid] < target`, move `low` to `mid + 1`.
   - Else, move `high` to `mid - 1`.
3. If not found, `low` will be the correct insertion index.

## Complexity
- **Time Complexity:** $O(\log n)$
- **Space Complexity:** $O(1)$
