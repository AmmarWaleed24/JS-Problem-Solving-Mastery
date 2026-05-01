# 06 - Find the Index of the First Occurrence in a String

## Problem Description
Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.

**Example:**
- Input: `haystack = "sadbutsad"`, `needle = "sad"`
- Output: `0`
- Explanation: "sad" occurs at index 0 and 6. The first occurrence is at index 0.

## My Approach
I utilized the built-in JavaScript `indexOf()` method, which is highly optimized for searching substrings. It directly returns the first index of the occurrence or -1 if not found.

## Complexity
- **Time Complexity:** $O(n \times m)$ in the worst case (where $n$ is haystack length and $m$ is needle length), though modern engines optimize this significantly.
- **Space Complexity:** $O(1)$ as we are not using extra data structures.
