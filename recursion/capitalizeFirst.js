function capitalizeFirst (arr) {
  if (arr.length === 1) {
    return [arr[0].charAt(0).toUpperCase() + arr[0].slice(1)];
  }
  const result = capitalizeFirst(arr.slice(0, -1));
  result.push(arr.slice(arr.length - 1)[0].charAt(0).toUpperCase() + arr[arr.length - 1].slice(1));
  return result;
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
console.log(capitalizeFirst(['avocado'])); // ['Avocado']
