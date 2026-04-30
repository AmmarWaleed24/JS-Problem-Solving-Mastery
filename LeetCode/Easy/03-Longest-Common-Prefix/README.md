# 03 - Longest Common Prefix

## Problem Description
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string `""`.

**Example:**
- Input: `strs = ["flower","flow","flight"]`
- Output: `"fl"`

## My Approach
I used the **Horizontal Scanning** technique:
1. Assume the first string is the common prefix.
2. Iterate through the rest of the strings.
3. For each string, check if it starts with our `prefix`.
4. If not, shorten the `prefix` by removing the last character until a match is found or the string becomes empty.

## Complexity
- **Time Complexity:** $O(S)$, where $S$ is the total number of characters in all strings.
- **Space Complexity:** $O(1)$, because we only store the prefix variable.
