# 05 - Merge Two Sorted Lists

## Problem Description
You are given the heads of two sorted linked lists `list1` and `list2`.
Merge the two lists into one **sorted** list. The list should be made by splicing together the nodes of the first two lists.

**Example:**
- Input: `l1 = [1,2,4]`, `l2 = [1,3,4]`
- Output: `[1,1,2,3,4,4]`

## My Approach
I used the **Iteration** approach with a **Dummy Node**:
1. Create a dummy head to act as the starting point of the merged list.
2. Use a pointer `current` to build the new list.
3. Compare the values of `list1` and `list2` at each step, attaching the smaller value to `current.next`.
4. After the loop, if any nodes remain in either list, attach them to the end.

## Complexity
- **Time Complexity:** $O(n + m)$, where $n$ and $m$ are the lengths of the two lists.
- **Space Complexity:** $O(1)$, as we are rearranging the existing nodes, not creating new ones.
