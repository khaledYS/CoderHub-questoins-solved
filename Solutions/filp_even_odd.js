
function filp_even_odd(numbers) {
    // write your code here
    return numbers.map((val)=>{
        let div = val % 2;
        if(div > 0){
            return val - 1;
        }else {
            return val + 1;
        }
    })
}
