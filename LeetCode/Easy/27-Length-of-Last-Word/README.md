# 27 - Length of Last Word

## Problem Description
Given a string `s` consisting of words and spaces, return the length of the last word in the string.

## My Approach
1. Trim any trailing spaces.
2. Use `lastIndexOf` to find the start of the last word or simply split by spaces and pick the last element.

## Complexity
- **Time Complexity:** $O(n)$.
- **Space Complexity:** $O(n)$ due to split (or $O(1)$ if iterating backwards).
