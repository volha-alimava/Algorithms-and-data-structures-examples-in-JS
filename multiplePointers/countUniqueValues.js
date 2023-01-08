function countUniqueValues(sortedArray) {
  if (sortedArray.length === 0) {
    return 0;
  }
  let i = 0;
  let j = 1;
  while (j <= sortedArray.length - 1) {
    if (sortedArray[i] !== sortedArray[j]) {
      sortedArray[i + 1] = sortedArray[j];
      i++;
      j++;
    } else {
      j++;
    }
  }
  return i + 1;
}

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
