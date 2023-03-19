
function arrowDuplicates(word) {
    // write your code here
    const splt = word.split("");
    word = word.toLowerCase();
    const newWords = [];

    const filterByInd = (arr, index) => {
        return arr.filter((_, ind)=>{
            if(ind != index){
                return true;
            }else {
                return false;
            }
        })
    }

    for (let index = 0; index < splt.length; index++) {
        const element = splt[index].toLowerCase();
        const newArr = filterByInd(splt, index)
        for (let _index = 0; _index < newArr.length; _index++) {
            const _element = newArr[_index].toLowerCase();
            if(element == _element){
                newWords.push(element)
            }
        }
    }

    for (let index = 0; index < newWords.length; index++) {
        const element = newWords[index];
        word = word.replace(element, "<")
    }

    word = word.replace(/[a-z|A-Z]/g, ">")

    return word
}

console.log(arrowDuplicates("Bb"))