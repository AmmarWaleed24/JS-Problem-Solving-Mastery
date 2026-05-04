# 26 - Longest Common Prefix

## Problem Description
Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".

## My Approach
1. Take the first string as the initial prefix.
2. Compare it with each subsequent string in the array.
3. Shorten the prefix until it matches the beginning of each string.

## Complexity
- **Time Complexity:** $O(S)$ where S is the sum of all characters in all strings.
- **Space Complexity:** $O(1)$.
