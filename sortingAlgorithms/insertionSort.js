// time complexity: avg - O(n^2), best case - O(n^2), worst - O(n^2), space complexity: O(1)
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j-1]) {
        [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
      } else {
        break;
      }
    }
  }
  return arr;
}

console.log(insertionSort([45, 1, 3, 10, 8, 17, 28])); // 1, 3, 8, 10, 17, 28, 45
