function sameFrequency(num1, num2) {
  const lookup = {};
  const num1Arr = num1.toString().split('');
  const num2Arr = num2.toString().split('');

  for (let i = 0; i < num1Arr.length; i++) {
    const number = num1Arr[i];
    lookup[number] ? (lookup[number] += 1) : (lookup[number] = 1);
  }
  for (let i = 0; i < num2Arr.length; i++) {
    const number = num2Arr[i];
    if (num2Arr.indexOf(num1Arr[i]) === -1) {
      return false;
    }
    if (!lookup[number]) {
      return false;
    } else {
      lookup[number] -= 1;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
