
function calculate_sum(lst) {
    // write your code here
    let total = 0;
    for (let index = 0; index < lst.length; index++) {
        const element = lst[index];
        if(element == 7) return total;
        total = total + element;
    }
    return total;
}