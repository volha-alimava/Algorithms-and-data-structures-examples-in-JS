function capitalizeWords (arr) {
  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  }
  let result = capitalizeWords(arr.slice(0, -1));
  result.push(arr.slice(arr.length - 1)[0].toUpperCase());
  return result;
}
  
let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
