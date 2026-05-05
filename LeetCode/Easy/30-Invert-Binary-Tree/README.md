# 30 - Invert Binary Tree

## Problem Description
Given the `root` of a binary tree, invert the tree (mirror it), and return its root.

## My Approach
Using **Recursion**:
1. Swap the left and right children of the current node.
2. Recursively call the function for the left and right subtrees.

## Complexity
- **Time Complexity:** $O(n)$.
- **Space Complexity:** $O(h)$ where $h$ is the height of the tree.
