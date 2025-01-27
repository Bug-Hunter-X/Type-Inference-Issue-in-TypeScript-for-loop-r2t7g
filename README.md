# Type Inference Issue in TypeScript
This repository demonstrates a subtle type inference issue in TypeScript that can occur with for loops and number types.

## Description
The `printNumbers2` function is designed to print numbers from 1 to `n`. However, if `n` is a floating-point number, the for loop can exhibit unexpected behavior and may result in a type error. The main reason for this issue is TypeScript's type inference system.

## How to Reproduce
Clone this repository and run the TypeScript compiler. The compiler should produce an error when it encounters the `printNumbers2` function being called with a float argument (10.5 in this example).

## Solution
The solution is to explicitly type the loop variable 'i' as a number.

## Additional notes
This issue highlights the importance of explicit typing when working with floating-point numbers and type inference in TypeScript.