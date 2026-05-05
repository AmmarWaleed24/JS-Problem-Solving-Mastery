# 31 - Minimum Depth of Binary Tree

## Problem Description
Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

## My Approach
I used a **Recursive (DFS)** approach. 
- If a node is null, depth is 0.
- If one child is null, we must take the path of the other child.
- If it's a leaf node, depth is 1.
- Otherwise, take `1 + min(leftDepth, rightDepth)`.

## Complexity
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(h)$ where $h$ is the height of the tree.
