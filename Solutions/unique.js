
function unique(arr) {
    // write your code here
    const resArr = [];

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
        const newArr = filterByInd(arr, index)
        let isExist = false;
        for (let index = 0; index < newArr.length; index++) {
            const _element = newArr[index];
            if(element == _element){
                isExist = true;
            }
        }

        if(!isExist){
            resArr.push(element);
        }
    }

    return resArr;
}
