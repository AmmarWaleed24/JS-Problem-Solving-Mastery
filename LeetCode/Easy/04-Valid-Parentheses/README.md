# 04 - Valid Parentheses

## Problem Description
Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.
An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

## My Approach
I used the **Stack** data structure:
1. Initialize an empty stack.
2. Create a map for closing brackets to their corresponding opening brackets.
3. Iterate through the string:
    - If it's an opening bracket, push it onto the stack.
    - If it's a closing bracket, check if it matches the top of the stack.
4. If the stack is empty at the end, the string is valid.

## Complexity
- **Time Complexity:** $O(n)$ where $n$ is the length of the string.
- **Space Complexity:** $O(n)$ in the worst case (e.g., all opening brackets).
