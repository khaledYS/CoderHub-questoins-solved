
function mergeAndOrder(array1, array2) {
    // write your code here
    const newArr = [];
    array1.forEach(e=>{newArr.push(e);});
    array2.forEach(e=>{newArr.push(e);});
	return newArr.sort((a, b)=>a-b)
}


console.log(mergeAndOrder([1, 2], [1,5]))