module.exports = function makeExchange(currency) {
	let exchange = {};

	if (currency >= 10000) {
		exchange.error = "You are rich, my friend! We don't have so much coins for exchange";
		return exchange;
	} else if (currency <= 0) {
		return exchange;
	}

	if (Math.fround(currency / 50) >= 1) {
		if (currency % 50 == 0) {
			exchange.H = Math.floor(currency / 50);	
			return exchange;		
		} else {
			exchange.H = Math.floor(currency / 50);
			currency = currency - 50 * exchange.H;
		}
	} if (Math.fround(currency / 25) >= 1) {
		if (currency % 25 == 0) {
			exchange.Q = Math.floor(currency / 25);
			return exchange;		
		} else {
			exchange.Q = Math.floor(currency / 25);
			currency = currency - 25 * exchange.Q;
		}		
	} if (Math.fround(currency / 10) >= 1) {
		if (currency % 10 == 0) {
			exchange.D = Math.floor(currency / 10);
			return exchange;			
		} else {
			exchange.D = Math.floor(currency / 10);
			currency = currency - 10 * exchange.D;
		}
	} if (Math.fround(currency / 5) >= 1) {
		if (currency % 5 == 0) {
			exchange.N = Math.floor(currency / 5);
			return exchange;			
		} else {
			exchange.N = Math.floor(currency / 5);
			currency = currency - 5 * exchange.N;
		}
	} if (Math.fround(currency / 1) >= 1) {
		exchange.P = Math.floor(currency / 1);
		return exchange;		
	}
	return exchange;				
}
