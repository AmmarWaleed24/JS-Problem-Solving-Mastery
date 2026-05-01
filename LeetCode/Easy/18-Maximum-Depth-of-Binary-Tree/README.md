# 18 - Maximum Depth of Binary Tree

## Problem Description
Given the `root` of a binary tree, return its maximum depth. The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

## My Approach
Used a simple **Recursive Depth-First Search (DFS)**. The depth of a node is $1 + \max(\text{left depth}, \text{right depth})$.

## Complexity
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$ (worst case for a skewed tree).
