# 23 - Path Sum

## Problem Description
Given the `root` of a binary tree and an integer `targetSum`, return `true` if the tree has a root-to-leaf path such that adding up all the values along the path equals `targetSum`.

## My Approach
I used a recursive **DFS** strategy. At each node:
1. Subtract the node's value from the current `targetSum`.
2. If it's a leaf node, check if the remaining `targetSum` equals 0.
3. Otherwise, continue searching in the left or right child.

## Complexity
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$ (worst case for skewed tree).
