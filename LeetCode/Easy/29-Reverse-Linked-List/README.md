# 29 - Reverse Linked List

## Problem Description
Given the `head` of a singly linked list, reverse the list, and return the reversed list.

## My Approach
I used the **Iterative** approach with three pointers:
- `prev` (initially null)
- `curr` (initially head)
- `next` (to store the next node temporarily)
We flip the `curr.next` to point to `prev` as we move along.

## Complexity
- **Time Complexity:** $O(n)$.
- **Space Complexity:** $O(1)$.
