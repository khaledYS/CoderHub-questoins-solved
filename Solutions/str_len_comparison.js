function str_len_comparison(words) {
    // write your code here
    if(words.length == 0 || words.length == 1){
        return false;
    }

    let len = null;

    for (let index = 0; index < words.length; index++) {
        const element = words[index];
        if(len == null){
            len = element.length;
        }else if (len !== element.length){
            len = null;
        }else {
            len = element.length;
        }
        console.log(len)
    }

    return len ? true : false;

}

console.log(str_len_comparison(["111", '222', '333']))