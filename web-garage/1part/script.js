// const myCity = {
// 	city: 'Tyumen',
// 	info: {
// 		isPopular: true,
// 		country: 'russia'
// 	}
// }


// const name = 'Alex';
// const age = 42;

// const userProfile = {
// 	// name: name,
// 	// age: age
// 	name,
// 	age
// }

// console.log(userProfile);

// const greeting = () => {
// 	console.log('greeting');
// }

// // greeting();

// const myCity1 = {
// 	city: 'NewYork',
// 	greeting
// }

// // console.log(myCity1);
// myCity1.greeting();

// let carJson = '{"color": "blue", "model": "lada","add": {	"have": true, "quantity": 5}}';

// const myCityJson = JSON.stringify(myCity);
// console.log(myCityJson);
// const myCityObject = JSON.parse(myCityJson);
// console.log(myCityObject)

// console.log(carJson);
// carJson = JSON.parse(carJson);
// console.log(carJson);
// console.log(carJson.model);

const myCity = {
	city: 'Tyumen',
	info: {
		isPopular: true,
		country: 'russia'
	}
}

const myCity2 = Object.assign({}, myCity);
myCity2.river = 'Tura';
myCity2.info.lake = true;
console.log(myCity2);
console.log(myCity);

let a = 5;
let b = 15;

function sum(a, b) {
	const c = a + b;
	console.log(c);
}

sum(a, b);

