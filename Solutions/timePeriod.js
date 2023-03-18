function timePeriod(date1, date2) {
    // write your code here
    function isIsoDate(byIso, byTime) {
        const d = new Date(byTime).toISOString();
        let _d = new Date(byTime).getTime();
        _d = new Date(_d).toISOString();
        if(d == _d){
            return true;
        }else{
            return false;
        }
    }

    // constants
    const _date1 = new Date(date1).getTime(),
    _date2 = new Date(date2).getTime(),
    nowDate = new Date().getTime();

    // check if there is invalid dates
    if (isIsoDate(date1, _date1) == false || isIsoDate(date1, _date1) == false) return false;

    // check if the the starting date comes before the ending date.
    if(_date1 > _date2){
        return false
    }

    // check if they (both of the dates) come before todays date.
    if(_date1 > nowDate || _date2 > nowDate) return false;

    return true
}

console.log(timePeriod('2023-08-02T00:00:00', "2017-08-08T00:00:00"))