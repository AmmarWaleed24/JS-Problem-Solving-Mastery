# 40 - Is Subsequence

## Problem Description
Given two strings `s` and `t`, return `true` if `s` is a subsequence of `t`, or `false` otherwise. (e.g., "ace" is a subsequence of "abcde").

## My Approach
Used **Two Pointers**:
1. Pointer `i` for `s` and `j` for `t`.
2. If `s[i] === t[j]`, move both.
3. Otherwise, only move `j`.
4. If `i` reaches the end of `s`, then it's a subsequence.

## Complexity
- **Time Complexity:** $O(n)$ where $n$ is length of `t`.
- **Space Complexity:** $O(1)$
