# 06 - Permutations

## Problem Description
Given an array `nums` of distinct integers, return **all the possible permutations**. You can return the answer in any order.

**Example:**
- **Input:** `nums = [1,2,3]`
- **Output:** `[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]`

## My Approach (Backtracking)
To solve this, I used a **Backtracking** algorithm which builds the solution step-by-step:
1. **Decision Tree:** For each position, we try every available number.
2. **State Space Search:** We push a number to our "current path", recurse to find the next numbers, and then "pop" it back (backtrack) to try a different number for the same position.
3. **Base Case:** When the length of our path equals the length of the input array, we've found a valid permutation.

## Complexity
- **Time Complexity:** $O(n \cdot n!)$ — There are $n!$ permutations, and it takes $O(n)$ to copy each into the result.
- **Space Complexity:** $O(n!)$ — To store all the permutations.
