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

//console.log(validateEmail('adfa@af.com'))


// task 4


let library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];



let readStatus = function(arr, index){
	len = arr.length
	if (index < len) {
		obj = arr[index];
		console.log(obj.readingStatus);
	}
	else {
		console.log('invalid index');	
	}
}

//readStatus(library, 2)


// task 5

let cart = [ 
   {
       name: 'Shoes',
       price: 560,
       quantity: 4
   },
   {
       name: 'Regular Tees',
       price: 455.50,
       quantity: 6
   },
   {
       name: 'Socks',
       price: 65.99,
       quantity: 2
   }];



let addNewItem = function(name, price, quantity){
					newItem = {
								'name': name,
								'price': price,
								'quantity': quantity							
							}					
					cart.push(newItem);
				}


let sortItemsBy = function(key){
					newCart = cart;
					newCart.sort((a,b) => (a[key] > b[key])?1:-1));
					return newCart;
				}

console.log(sortItemsBy('quantity'));


let totalCost = function(){
					totalCost = 0
					cart.forEach(function(item){
						totalCost+=item['price'];
					})
					return totalCost;
				}
console.log(totalCost());

