# 20 - Valid Palindrome

## Problem Description
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.

## My Approach
1. Clean the string using a Regular Expression (Regex) to remove non-alphanumeric characters.
2. Use **Two Pointers** (start and end) to compare characters moving towards the center.

## Complexity
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$ (if comparing in place) or $O(n)$ for the cleaned string.
