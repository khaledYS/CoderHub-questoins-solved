
function kSumSubset(arr, k) {
    // write your code here
    const Coin = (TargetSum, Coins) => {
        if(TargetSum < 0) return 0;//first base case
        if(TargetSum === 0) return 1;//second base case
        
        var cnt = 0;//Initialize this variable for storing count of ways to combine our coins set values to construct our target sum
        for(let eachCoin of Coins){//branch (look at our tree) for each coin in our given coin set with which we are to form the target sum
            const newTargetSum = TargetSum - eachCoin;//subtract each value in our given coins set from the target sum to get the new target sum for the next level
            var result = Coin(newTargetSum, Coins);//make each recursive call(either of our base case is returned initially depending on the value of the target sum at the time of calling)
          cnt += result;//increment count of ways to combine our coins set values to construct the given target sum
        }
        return cnt;//after everything, return the count of ways to combine our coins set value to construct our target sum
    }
    
    if(Coin(k, arr) > 0){
        return true;
    }else{
        return false;
    }
}


