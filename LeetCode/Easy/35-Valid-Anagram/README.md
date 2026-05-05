# 35 - Valid Anagram

## Problem Description
Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise. (An Anagram is a word formed by rearranging the letters of a different word).

## My Approach
1. If lengths differ, return false.
2. Use a **Frequency Counter** (Hash Map or Array of size 26).
3. Increment count for `s` and decrement for `t`.
4. If all counts are zero, it's an anagram.

## Complexity
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$ (fixed size alphabet array).
