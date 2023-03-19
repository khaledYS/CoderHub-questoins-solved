
function namesSort(namesArray, order) {
    // write your code here
    const sorted = namesArray.sort();
    if(order == "DESC"){
        return sorted.reverse();
    }else if (order == "ASC"){
        return sorted;
    }
}