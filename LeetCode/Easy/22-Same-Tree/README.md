# 22 - Same Tree

## Problem Description
Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

## My Approach
Used a **Recursive (DFS)** approach:
1. If both nodes are `null`, they are the same.
2. If one is `null` or values differ, they are not the same.
3. Recursively check the left and right subtrees.

## Complexity
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(h)$ where $h$ is the height of the tree.
