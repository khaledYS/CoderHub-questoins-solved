
function count_ones(num) {
    // write your code here
    num = num.toString(2);
    let howMnyTims = 0;
    for (let index = 0; index < num.length; index++) {
        const element = num[index];
        if(element == 1) howMnyTims += 1;
    }

    return howMnyTims
}   
