const myPromise = new Promise<number>((resolve, reject) => {
	setTimeout(() => {
		resolve(100);
	}, 2000);
	reject("Mi amigo se perdio");
});

myPromise
	.then((myMoney) => {
		console.log(`Tengo mis ${myMoney} pejecoins`);
	})
	.catch((reason) => {
		console.log(reason);
	})
	.finally(() => {
		console.log("Sigamos con lo que nos truje");
	});
