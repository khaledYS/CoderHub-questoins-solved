
function number_sum(num) {
    // write your code here
    let total = 0;
    for (let index = 0; index <= num; index++) {
        const element = num[index];
        total = total + index;
    }
    return total;
}

console.log(number_sum(15))