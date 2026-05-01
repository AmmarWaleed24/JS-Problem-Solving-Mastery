# 16 - Binary Tree Inorder-Traversal

## Problem Description
Given the `root` of a binary tree, return the inorder traversal of its nodes' values. (Left -> Root -> Right).

## My Approach
I used a **Recursive** approach to visit the nodes. 
1. Visit the left child.
2. Add the current node's value.
3. Visit the right child.

## Complexity
- **Time Complexity:** $O(n)$ where $n$ is the number of nodes.
- **Space Complexity:** $O(n)$ due to the recursion stack.
