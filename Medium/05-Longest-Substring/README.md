# 05 - Longest Substring Without Repeating Characters

## Problem Description
Given a string `s`, find the length of the **longest substring** without repeating characters.

**Example:**
- **Input:** `s = "abcabcbb"`
- **Output:** `3`
- **Explanation:** The answer is "abc", with the length of 3.

## My Approach (Sliding Window)
Instead of checking all possible substrings ($O(n^3)$), I used the **Sliding Window** technique to solve it in linear time:
1. **Window Boundaries:** Use two pointers (`left` and `right`) to represent the current substring.
2. **Hash Map:** Store the last seen index of each character.
3. **Dynamic Shift:** When a duplicate character is found, shift the `left` pointer to the position right after the last occurrence of that character.
4. **Update Max:** At each step, calculate the distance between `left` and `right` and update the maximum length.



## Complexity
- **Time Complexity:** $O(n)$  
  Each character is visited at most twice (once by `right` and once by `left`).
- **Space Complexity:** $O(min(m, n))$  
  Where $n$ is the string length and $m$ is the size of the character set (charset).
