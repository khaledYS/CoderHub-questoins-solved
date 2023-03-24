
function Decimal_places(num) {
    // write your code here
	num = num.toString().split(".");
    if(num.length < 2) return false; 
    let res = num[1].split("").length;
    return res > 0 ? res : 0
}

console.log(Decimal_places('3'))