function averagePair(arr, average) {
  if (arr.length === 0) return false;
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let avg = (arr[i] + arr[j]) / 2;
    if (avg === average) {
      return true;
    } else if (avg < average) {
      i++;
    } else {
      j--;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
