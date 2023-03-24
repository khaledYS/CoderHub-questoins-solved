
function replaceThe(txt) {
    // write your code here
    const splt = txt.split(" ");
    const vowels = "aeiuo";
    const nTxt = splt.map((val, ind)=>{
        if(val.toLowerCase() == "the"){
            if(vowels.includes(splt[ind+1][0].toLowerCase())){
                return "an"
            }else {
                return "a"
            }
        }else {
            return val;
        }
    })
	return nTxt.join(" ")
}

console.log(replaceThe("I love The Aogs"))