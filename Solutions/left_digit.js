
function left_digit(strParam) {
    // write your code here
    strParam = strParam.split("");
    for (let index = 0; index < strParam.length; index++) {
        let element = strParam[index];
        if(!isNaN(Number(element)))return Number(element);
    }
}
