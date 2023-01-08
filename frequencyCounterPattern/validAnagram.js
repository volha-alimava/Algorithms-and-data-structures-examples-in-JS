const validAnagram = (str1, str2) => {
  const str1Obj = {};
  const str2Obj = {};

  for (let val of str1) {
    str1Obj[val] = (str1Obj[val] || 0) + 1;
  }
  for (let val of str2) {
    str2Obj[val] = (str2Obj[val] || 0) + 1;
  }
  if (str1.length === 0 && str2.length === 0) {
    return true;
  }
  if (str1.length !== str2.length) {
    return false;
  }
  for (let key in str2Obj) {
    if (!str2Obj[key]) {
      return false;
    }
    if (str2Obj[key] === str1Obj[key]) {
      return true;
    } else {
      return false;
    }
  }
};

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false) // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true
