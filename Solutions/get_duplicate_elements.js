
function get_duplicate_elements(arr) {
    // write your code here
    const similarity = [];
    const filterByInd = (arr, index) => {

        return arr.filter((_, ind)=>{
            if(ind != index){
                return true;
            }else {
                return false;
            }
        })
    }

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        const newArr = filterByInd(arr, index);
        for (let index = 0; index < newArr.length; index++) {
            const _element = newArr[index];
            if(element == _element) similarity.push(_element);
        }
        
    }

    const sett = new Set(similarity);
    return [...sett]
}

console.log(get_duplicate_elements([4,5,2,4]))