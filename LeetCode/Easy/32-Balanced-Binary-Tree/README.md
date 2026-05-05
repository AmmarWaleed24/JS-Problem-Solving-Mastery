# 32 - Balanced Binary Tree

## Problem Description
Given a binary tree, determine if it is height-balanced (The height of the two subtrees of every node never differs by more than one).

## My Approach
Used a helper function to calculate height. If at any point the difference between left and right subtree heights is > 1, we return -1 (to signal an unbalanced state).

## Complexity
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(h)$
