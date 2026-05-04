# 25 - Majority Element

## Problem Description
Given an array `nums` of size `n`, return the majority element. The majority element is the element that appears more than `⌊n / 2⌋` times.

## My Approach
I implemented **Boyer-Moore Voting Algorithm**.
1. Initialize a `candidate` and a `count`.
2. Iterate through the array:
   - If `count` is 0, set the current element as the `candidate`.
   - If the element matches `candidate`, increment `count`; otherwise, decrement it.
The candidate left at the end is the majority element.

## Complexity
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$
