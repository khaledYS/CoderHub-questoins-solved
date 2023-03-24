
function input_type(value) {
    // write your code here
    let newVal = Number(value);
    if(isNaN(newVal)){
        return "string"
    }else {
        if(value.includes(".")) return "double";
        else return "integer"
    }
}
