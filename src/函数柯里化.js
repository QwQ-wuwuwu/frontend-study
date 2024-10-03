let nums = [];
function sum(...args) {
  nums.push(...args);
  if (nums.length >= 5) {
    const res = nums.slice(0, 5).reduce((p, c) => {
      return p + c;
    }, 0);
    nums = [];
    return res;
  } else {
    return sum;
  }
}

// function sumMaker(number) {
//   let nums = [];
//   function sum(...args) {
//     nums.push(...args);
//     if (nums.length >= number) {
//       const res = nums.slice(0, number).reduce((p, c) => {
//         return p + c;
//       }, 0);
//       nums = [];
//       return res;
//     } else {
//       return sum;
//     }
//   }
//   return sum
// }
// console.log(sum(2)(3)(4, 5)(6));
// console.log(sum(2)(3)(4, 5)(10));


function sumMaker(number) {
  let nums = []
  function sum(...args) {
    nums.push(...args)
    if(nums.length >= number) {
      const res = nums.slice(0, number).reduce((p, c) => p + c, 0)
      nums = []
      return res
    } else {
      return sum
    }
  }
  return sum
}
const fn1 = sumMaker(5)
console.log(fn1(1)(2)(3, 4)(5))
