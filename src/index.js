// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    const objExchange = {};
    if (currency > 10000){
        objExchange.error = "You are rich, my friend! We don't have so much coins for exchange";
        return objExchange;
    }
    if (currency <= 0) {
        return objExchange;
    }
    
    if (currency >= 50) {
        objExchange.H = Math.floor(currency/50);
        currency = currency % 50;
    }
    
    if (currency >= 25) {
        objExchange.Q = Math.floor(currency/25);
        currency = currency % 25;
    }
    if (currency >= 10) {
        objExchange.D = Math.floor(currency/10);
        currency = currency % 10;
    }
    if (currency >= 5) {
        objExchange.N = Math.floor(currency/5);
        currency = currency % 5;
    }
    if (currency >= 1) {
        objExchange.P = currency;        
    }
    return objExchange;
}
