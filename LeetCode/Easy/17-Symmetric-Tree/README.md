# 17 - Symmetric Tree

## Problem Description
Given the `root` of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

## My Approach
A tree is symmetric if the left subtree is a mirror reflection of the right subtree. I used a helper function to compare two nodes:
1. Both are null (Symmetric).
2. One is null (Not symmetric).
3. Values are different (Not symmetric).
4. Recursively check Left-Right and Right-Left.

## Complexity
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(h)$ where $h$ is the height of the tree.
