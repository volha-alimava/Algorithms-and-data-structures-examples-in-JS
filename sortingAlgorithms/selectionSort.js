// time complexity: avg - O(n^2), best case - O(n^2), worst - O(n^2), space complexity: O(1)
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

console.log(selectionSort([45, 1, 3, 10, 8, 17, 28])); // 1, 3, 8, 10, 17, 28, 45
