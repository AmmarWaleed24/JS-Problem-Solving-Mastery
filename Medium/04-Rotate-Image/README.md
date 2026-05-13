# 04 - Rotate Image

## Problem Description
You are given an `n x n` 2D `matrix` representing an image. Rotate the image by **90 degrees** (clockwise).
You have to rotate the image **in-place**, which means you have to modify the input 2D matrix directly. **DO NOT** allocate another 2D matrix and do the rotation.

**Example:**
- **Input:** `matrix = [[1,2,3],[4,5,6],[7,8,9]]`
- **Output:** `[[7,4,1],[8,5,2],[9,6,3]]`

## My Approach (Transpose & Reverse)
Rotating a matrix manually is hard, but mathematically it's simple if broken into two steps:
1. **Transpose the Matrix:** Convert all rows into columns. After this, the element at `(i, j)` moves to `(j, i)`.
2. **Reverse Each Row:** By reversing the elements in every row, the transposed matrix effectively turns 90 degrees clockwise.



## Complexity
- **Time Complexity:** $O(n^2)$  
  We visit each element of the matrix twice (once for transpose, once for reverse).
- **Space Complexity:** $O(1)$  
  We modify the matrix in-place without using extra memory.
