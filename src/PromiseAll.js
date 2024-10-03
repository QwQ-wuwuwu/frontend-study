function myPromiseAll(promises) {
    const result = []
    let donePromises = 0
    return new Promise((resolve, reject) => {
        if(promises.length === 0) {
            resolve(result)
        }
        promises.forEach((p, index) => {
            Promise.resolve(p).then(
                (res) => {
                    result[index] = res
                    donePromises++
                    if(donePromises === promises.length) {
                        resolve(result)
                    }
                },
                (err) => {
                    reject(err)
                }
            )
        });
    })
}

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

myPromiseAll([p1, p2, p3]).then(
  (results) => {
    console.log(results); // 输出: [1, 2, 3]
  },
  (error) => {
    console.error(error);
  }
);