# 19 - Single Number

## Problem Description
Given a non-empty array of integers `nums`, every element appears twice except for one. Find that single one. You must implement a solution with a linear runtime complexity and use only constant extra space.

## My Approach
The most efficient way is using the **XOR (^) bitwise operator**. 
- $A \oplus A = 0$
- $A \oplus 0 = A$
By XORing all numbers together, the pairs cancel out, leaving only the single number.

## Complexity
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$
