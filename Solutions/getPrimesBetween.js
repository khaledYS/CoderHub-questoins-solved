
function getPrimesBetween(a, b) {
    // write your code here
    function checkLoyality(number){
        let isPrime = true;
        
        // check if number is equal to 1
        if (number === 1) {
            return false;
        }
        // check if number is greater than 1
        else if (number > 1) {
        
            // looping through 2 to number-1
            for (let i = 2; i < number; i++) {
                if (number % i == 0) {
                    isPrime = false;
                    break;
                }
            }
        
            if (isPrime) {
                return true
            } else {
                return false
            }
        }else{
            return false;
        }
    }

    const primes = [];

    for (let index = a; index <= b; index++) {
        const res = checkLoyality(index);
        if(res){
            primes.push(index)
        }
    }

    return primes;

}


console.log(Number("4%".replace("%", "")))