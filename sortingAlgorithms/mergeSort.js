// time complexity: avg - O(n log n), best case - O(n log n), worst - O(n log n), space complexity: O(n)
function merge(arr1, arr2) {
  let targetArray = [];
  let arr1MinIndex = 0;
  let arr2MinIndex = 0;

  while (arr1MinIndex < arr1.length && arr2MinIndex < arr2.length) {
    if (arr1[arr1MinIndex] <= arr2[arr2MinIndex]) {
      targetArray.push(arr1[arr1MinIndex]);
      arr1MinIndex++;
    } else {
      targetArray.push(arr2[arr2MinIndex]);
      arr2MinIndex++;
    }
  }
  while (arr1MinIndex < arr1.length) {
    targetArray.push(arr1[arr1MinIndex]);
    arr1MinIndex++;
  }
  while (arr2MinIndex < arr2.length) {
    targetArray.push(arr2[arr2MinIndex]);
    arr2MinIndex++;
  }
  return targetArray;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left  = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  return merge(left, right);
}

console.log(mergeSort([1, 80, 50, 2, 14, 37, 99, 100])); // [1, 2, 14, 37, 50, 80, 99, 100]
