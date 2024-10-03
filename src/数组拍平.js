// ES5
function flatten(arr) {
  let res = [];
  for(let x of arr) {
    if(Array.isArray(x)) {
        res = res.concat(flatten(x))
    } else {
        res.push(x)
    }
  }
  return res;
}
// console.log(flatten([1,[2,[3,4],5],6]));

function flatten(arr, depth) { // 根据深度拍平数组
  const ans = []
  function flat(arr, d) {
    for(let a of arr) {
      if(Array.isArray(a) && d > 0) {
        flat(a, d - 1)
      } else {
        ans.push(a)
      }
    }
  }
  flat(arr, depth)
  return ans
}
console.log(flatten([1,[2,[3,4],5],6], 2))
