// webpack打包原理

/** 实现一个函数，接收以下对象为参数，将其转换为一个数组，输出该数组
 * */
// const obj = {
//   a: {
//     a1: 123,
//     a2: {
//       a21: 345,
//     }
//   },
//   b: 567,
//   c: {
//     c1: 789
//   }
// }

// 输入：obj
// 输出:
// [
//   "a.a1",
//   "a.a2.a21",
//   "b",
//   "c.c1"
// ]

// 解题：
function flattenObjectPath(obj, path = []) {
  let result = [];
  let originPath = [...path];
  for (let i in obj) {
    const item = obj[i];
    path.push(i);
    if (Object.prototype.toString.call(item) === "[object Object]") {
      result = [...result, ...flattenObjectPath(item, path)];
      path = [];
      originPath = [];
    } else {
      result.push(path.join("."));
      path = [...originPath];
    }
  }

  return result;
}

/**
 * 完成一个sum函数，实现如下功能。注意需要在执行count的时候才真正求和。
 * 编写函数sum   
 * sum(1)(2).count() // 3
 * sum(1)(2)(3).count() // 6
 * sum(1)(2)(3)(4,5).count() // 15 
*/
const sum = (function() {
    let numbers = [];
    const saveNumbers = (...args) => {
        numbers = [...numbers, ...args];
        return saveNumbers;
    }

    saveNumbers.count = () => {
        let count = 0;
        for (let i = 0; i < numbers.length; i++) {
            count += numbers[i];
        }

        return count;
    }

    return saveNumbers;
})()


// left instanceof right
// function myInstanceOf(left, right) => boolean