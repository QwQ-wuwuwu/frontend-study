// const isValid = function(s) {
//     let left = []
//     let right = []
//     for(let i = 0; i < s.length; i++) {
//         if(s.charAt(i) == '(' || s.charAt(i) == '[' || s.charAt(i) == '{') {
//             left.push(s.charAt(i))
//         } else {
//             right.push(s.charAt(i))
//             if(s.charAt(i) == ')' && left[left.length - 1] == '(') {
//                 left.splice(left.length - 1, 1)
//                 right.splice(0, 1)
//                 continue
//             }
//             if(s.charAt(i) == ']' && left[left.length - 1] == '[') {
//                 left.splice(left.length - 1, 1)
//                 right.splice(0, 1)
//                 continue
//             }
//             if(s.charAt(i) == '}' && left[left.length - 1] == '{') {
//                 left.splice(left.length - 1, 1)
//                 right.splice(0, 1)
//                 continue
//             }
//         }
//     }
//     return (left.length > 0 || right.length > 0) ? false : true
// };
// console.log(isValid('(){}[]'))

// var merge = function(nums1, m, nums2, n) {
//     let sorted = new Array(m + n).fill(0)
//     let cur = 0
//     let p1 = 0, p2 = 0
//     while(p1 < m || p2 < n) {
//         if(p1 === m) {
//             sorted[cur] = nums2[p2]
//             p2++
//             cur++
//             continue
//         }
//         if(nums1[p1] <= nums2[p2]) {
//             sorted[cur] = nums1[p1]
//             p1++
//         } else {
//             sorted[cur] = nums2[p2]
//             p2++
//         }
//         cur++
//     }
//     for (let i = 0; i != m + n; ++i) {
//         nums1[i] = sorted[i];
//     }
//     return nums1
// };

// console.log(merge([0],0,[1],1))

// const replaceTo = (s:string) => {
//     return s.toLowerCase().replace(/[^a-zA-Z]/g, '')
// }
// console.log(replaceTo('djsak8e72.:;dsjks.dd/?'))

// let a = 1, b = 2
// a = a + b
// b = a - b
// a = a - b
// console.log(a)
// console.log(b)

// var minSubArrayLen = function(target, nums) {
//     let start = 0, end = 0
//     let sum = 0, res = 0
//     while(end < nums.length) {
//         sum += nums[end]
//         while(sum > target) {
//             sum -= nums[start]
//             start++
//         }
//         if(sum === target) {
//             res = end - start + 1
//         }
//         end++
//     }
//     return res
// };
// console.log(minSubArrayLen(11, [1,2,3,4,5]))

// function isSameDay(time, date) {
//     // time:2024-07-03T15:30:56
//     const arrayTime = time.substring(0, time.indexOf('T')).split('-').map(t => Number(t))
//     const [year, month, day] = [date.getFullYear(), date.getMonth() + 1, date.getDay()]
//     if(year === arrayTime[0] && month === arrayTime[1] && day === arrayTime[2]) {
//         return time.substring(time.indexOf('T') + 1, time.length - 3)
//     }
//     return 'xxxx'
// }
// console.log(isSameDay('2024-07-03T15:30:56', new Date()))

// function transformObject(array) {
//     const ans = array.reduce((pre, cur) => `${pre}'${pre ? ',' : ''}${cur.name}':'${cur.age}'`, '')
//     return ans
// }
// console.log(transformObject([{name:'tom', age:18}, {name:'alice',age:20}]))

// async function sleep(m) {
//     return await new Promise(resolve => {
//         setTimeout(resolve, m)
//     })
// }
// const pre = new Date()
// console.log(sleep(1000).then(() => console.log(new Date() - pre)))

function arrayToTree(arr) {
  // 创建一个id到节点的映射
  const idMap = {};
  arr.forEach((item) => (idMap[item.id] = { ...item, children: [] }));
  let root = null;
  // 通过遍历数组来构建树结构
  arr.forEach((item) => {
    if (item.parentId === undefined) {
      // 根节点
      root = idMap[item.id];
    } else {
      // 非根节点，找到其父节点并将其加入父节点的children数组中
      idMap[item.parentId].children.push(idMap[item.id]);
    }
  });
  return root;
}
const arr = [
  { id: 1, name: "i1" },
  { id: 2, name: "i2", parentId: 1 },
  { id: 4, name: "i4", parentId: 3 },
  { id: 3, name: "i3", parentId: 2 },
  { id: 7, name: "i7", parentId: 3 },
  { id: 8, name: "i8", parentId: 3 },
];
const tree = arrayToTree(arr);
console.log(JSON.stringify(tree, null, 2));
