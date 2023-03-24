
function allSameCase(word) {
    // write your code here
    const splt = word.split("");
    let sens = null;
    const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let index = 0; index < splt.length; index++) {
        const element = splt[index];
        const upper = uppers.includes(element);
        if(sens === null){
            sens = upper
        }else if(upper !== sens) {
            return false;
        }
    }

    return true;
}
console.log(allSameCase("ello"))