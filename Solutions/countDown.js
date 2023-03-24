function countDown(num) {
  let result = [];
    num = num - 3;
  for (let i = num; i >= 0; i -= 3) {
    if (i <= 1) {
      break;
    }
    if (i % 2 === 0) {
      result.push(i);
    }
  }

  return result.length > 0 ? result.sort((a, b) => a-b) : [0];
}

console.log(countDown())
console.log(countDown(10))
console.log(countDown(15))