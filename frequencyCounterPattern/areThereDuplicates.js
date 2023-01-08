function areThereDuplicates(...rest) {
  const arr = Array.from(rest);
  const lookup = {};

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (lookup[element]) {
      return true;
    } else {
      lookup[element] = 1;
    }
  }
  return false;
}

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
