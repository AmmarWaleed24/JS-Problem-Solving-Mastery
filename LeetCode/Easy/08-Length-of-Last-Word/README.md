# 08 - Length of Last Word

## Problem Description
Given a string `s` consisting of words and spaces, return the length of the last word in the string.

**Example:**
- Input: `s = "Hello World  "`
- Output: `5` (The last word is "World").

## My Approach
1. Use `trim()` to remove any trailing or leading whitespace.
2. Use `lastIndexOf(" ")` to find the start of the last word.
3. Calculate the length by subtracting the index of the last space from the total string length.

## Complexity
- **Time Complexity:** $O(n)$ where $n$ is the length of the string.
- **Space Complexity:** $O(1)$ (or $O(n)$ depending on how `trim()` creates a new string in memory).
