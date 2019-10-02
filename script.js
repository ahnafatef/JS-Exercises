/* JavaScript code here */


function arraySum (arr) {
	let sum = 0;

	arr.forEach(function(item){
		sum += item
	})

	return (multiplier) => { return sum * multiplier }
}

//let sum = arraySum([1,2,3,5,6]);

// console.log(sum(4));

// task 3

let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let validateEmail = function (email){
						if (validEmail.test(email))
							return true;
						return false;
					}

console.log(validateEmail('adfa@af.com'))

