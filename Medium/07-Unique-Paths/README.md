# 07 - Unique Paths

## Problem Description
There is a robot on an `m x n` grid. The robot is initially located at the **top-left corner** and tries to move to the **bottom-right corner**. The robot can only move either **down** or **right** at any point in time.

Given the two integers `m` and `n`, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

**Example:**
- **Input:** `m = 3, n = 7`
- **Output:** `28`

## My Approach (Dynamic Programming)
This is a classic DP problem. The core idea is that the number of ways to reach a cell `(i, j)` is the sum of ways to reach the cell above it `(i-1, j)` and the cell to its left `(i, j-1)`.

1. **Base Case:** All cells in the first row and first column have only **1** way to be reached (either all right or all down).
2. **State Transition:** `dp[i][j] = dp[i-1][j] + dp[i][j-1]`.
3. **Optimization:** Instead of a 2D matrix, I used a 1D array to store only the previous row's values, reducing Space Complexity to $O(n)$.



## Complexity
- **Time Complexity:** $O(m \cdot n)$ — We visit each cell in the grid once.
- **Space Complexity:** $O(n)$ — Optimized to store only one row.
