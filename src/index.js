// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var objExchange = {};
    if (currency > 10000){
        objExchange.error = "You are rich, my friend! We don't have so much coins for exchange";
        return objExchange;
    }
    if (currency == 0) {
        return objExchange;
    }
    var countH = 0, countQ = 0, countD = 0, countN = 0, countP = 0;
    while (currency >= 50) {
        currency -= 50;
        countH++;
        objExchange.H = countH;
    }
    while (currency >= 25) {
        currency -= 25;
        countQ++;
        objExchange.Q = countQ;
    }
    while (currency >= 10) {
        currency -= 10;
        countD++;
        objExchange.D = countD;
    }
    while (currency >= 5) {
        currency -= 5;
        countN++;
        objExchange.N = countN;
    }
    while (currency >= 1) {
        currency -= 1;
        countP++;
        objExchange.P = countP;
    }
    return objExchange;

}
