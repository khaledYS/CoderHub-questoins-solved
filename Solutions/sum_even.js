
function sum_even(arr) {
    // write your code here
    let total = 0;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(element % 2 !== 0){
            total = total + element
        }
    }
    return total;
}

console.log(sum_even([1, 7, 1]))