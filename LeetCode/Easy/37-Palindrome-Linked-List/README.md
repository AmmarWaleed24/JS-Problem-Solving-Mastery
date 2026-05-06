# 37 - Palindrome Linked List

## Problem Description
Given the `head` of a singly linked list, return `true` if it is a palindrome or `false` otherwise.

## My Approach
1. Find the middle of the list using **Slow & Fast pointers**.
2. **Reverse** the second half of the list.
3. Compare the first half with the reversed second half.

## Complexity
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$
