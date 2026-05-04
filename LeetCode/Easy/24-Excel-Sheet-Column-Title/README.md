# 24 - Excel Sheet Column Title

## Problem Description
Given an integer `columnNumber`, return its corresponding column title as it appears in an Excel sheet.
Example: 1 -> A, 2 -> B, 28 -> AB.

## My Approach
This is a base-26 conversion problem, but with a twist (it's 1-indexed).
1. While `columnNumber > 0`, decrement it by 1 (to handle the 0-indexing).
2. Find the remainder when divided by 26.
3. Convert the remainder to a character (0 -> A, 1 -> B...).
4. Prepend the character to the result and update the number.

## Complexity
- **Time Complexity:** $O(\log_{26} n)$
- **Space Complexity:** $O(1)$ (ignoring the output string).
