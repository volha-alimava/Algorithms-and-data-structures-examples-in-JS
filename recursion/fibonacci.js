// O(2^N) which is even worse than O(n^2)
function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465


// using memoization
// O(n) which is great improvement, but not perfect due to potential max call stack error
function fibMemo(num, memo = []) {
  if (memo[num] !== undefined) return memo[num];
  if (num <= 2) return 1;
  const result = fibMemo(num - 1, memo) + fibMemo(num - 2, memo);
  memo[num] = result;
  return result;
}

console.log(fibMemo(4)); // 3
console.log(fibMemo(10)); // 55
console.log(fibMemo(28)); // 317811
console.log(fibMemo(35)); // 9227465

// using tabulation
// O(n), but better with space complexity and solve potential max call stack issue
function fibTabulation(num) {
  if (num <= 2) return 1;
  // initial
  const fibNums = [0, 1, 1];
  for (let i = 3; i <= num; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[num];
}

console.log(fibTabulation(4)); // 3
console.log(fibTabulation(10)); // 55
console.log(fibTabulation(28)); // 317811
console.log(fibTabulation(35)); // 9227465
