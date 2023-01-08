// time complexity: avg - O(n^2), best case - O(n), worst - O(n^2), space complexity: O(1)
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([45, 1, 3, 10, 8, 17, 28])); // 1, 3, 8, 10, 17, 28, 45
