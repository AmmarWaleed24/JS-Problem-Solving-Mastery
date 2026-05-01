# 10 - Add Binary

## Problem Description
Given two binary strings `a` and `b`, return their sum as a binary string.

**Example:**
- Input: `a = "11"`, `b = "1"` -> Output: `"100"`

## My Approach
I used JavaScript's `BigInt` to handle very large binary strings that might exceed the standard Integer limit. 
1. Convert binary strings to BigInt using the `0b` prefix.
2. Add the two numbers.
3. Convert the result back to a binary string using `.toString(2)`.

## Complexity
- **Time Complexity:** $O(n + m)$ where $n$ and $m$ are lengths of strings.
- **Space Complexity:** $O(n + m)$ to store the result.
