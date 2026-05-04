# 21 - Linked List Cycle

## Problem Description
Given `head`, the head of a linked list, determine if the linked list has a cycle in it. A cycle exists if there is some node in the list that can be reached again by continuously following the `next` pointer.

## My Approach
I used **Floyd's Cycle-Finding Algorithm** (also known as the "Tortoise and the Hare"):
1. Initialize two pointers, `slow` and `fast`.
2. `slow` moves one step, `fast` moves two steps.
3. If they ever meet, there is a cycle. If `fast` reaches the end (`null`), there is no cycle.

## Complexity
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$
