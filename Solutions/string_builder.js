function string_builder(str) {
  let stack = [];
  let result = "";
  let num = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "[") {
      stack.push([num, result]);
      result = "";
      num = 0;
    }
    else if (str[i] === "]") {
      let [prev_num, prev_res] = stack.pop();
      result = prev_res + result.repeat(prev_num);
    }
    else if (isNaN(str[i])) {
      result += str[i];
    }
    else {
      num = num * 10 + parseInt(str[i]);
    }
  }
  
  return result;
}

console.log(string_builder("3[a]2[bc]"))