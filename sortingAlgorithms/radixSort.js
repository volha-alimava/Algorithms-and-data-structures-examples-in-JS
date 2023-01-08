// sorting algorithm that works of list of numbers
// time complexity: avg - O(nk), best case - O(nk), worst - O(nk), space complexity: O(n + k)
// <-- direction of postion is from the right to left
function getDigit(num, position) {
  return Math.floor(Math.abs(num) / Math.pow(10, position) % 10);
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;

  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(arr) {
  const maxDigits = mostDigits(arr);

  for (let k = 0; k < maxDigits; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let n = 0; n < arr.length; n++) {
      digitBuckets[getDigit(arr[n], k)].push(arr[n]);
    }
    arr = [].concat(...digitBuckets);
  }
  return arr;
}

console.log(radixSort([42, 4567, 345, 986, 7839, 1234, 8351, 23, 456, 1])) // [1, 42, 345, 456, 986, 1234, 4567, 7839, 8351]
