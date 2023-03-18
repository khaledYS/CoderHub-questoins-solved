
function date_format(date) {
    // write your code here
    let splt = date.split("/");
    return `${date} | ${splt.join("-")} | ${splt[1]}/${splt[2]}/${splt[0]}`;
}


console.log(date_format('2019/12/28'))