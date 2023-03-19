
function find_prefix(words, text) {
    // write your code here
    const newWords = [];

    for (let index = 0; index < words.length; index++) {
        const element = words[index];
        if(element.toLowerCase().includes(text.toLowerCase())){
            newWords.push(element);
        }
    }

    if(newWords.length > 0)return newWords
    else return ['No matches found'];
}
