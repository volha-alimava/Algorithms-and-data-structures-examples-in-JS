function collectStrings(object) {
  const stringsArr = [];
 
  function gatherStrings(obj) {
    for (let key in obj) {
      if (typeof obj[key] === 'string') {
        stringsArr.push(obj[key]);
      }
      else if (typeof obj[key] === 'object') {
        return gatherStrings(obj[key]);
      }
    }
  }

  gatherStrings(object);
  return stringsArr;
};

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
