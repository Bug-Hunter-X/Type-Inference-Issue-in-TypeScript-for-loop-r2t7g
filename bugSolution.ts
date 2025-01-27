function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(10); // This will work fine

// Solved: Explicitly define the type of i as a number
function printNumbers2(n: number): void {
  for (let i:number = 1; i <= n; i++) {
    console.log(i);
  }
}
printNumbers2(10.5) 