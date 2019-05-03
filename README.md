Use "node multiply.js" to run mul(2)(4)(5)

Install dependcies and run "yarn start" to run clock component


Which of the following code snippet append an element value at the end of the array, arr?

a) arr[arr.length+1] = value

b) arr[arr.length] = value

c) arr[arr.length - 1] = value

d) arr = arr + value 


Answer: b) Array.length is last elemnt of the arary, and will update elemnt to that index



JavaScript: what is the correct way to create a JavaScript array?

a) var items = ["Orange", "Apple"];

b) var items = {"Orange", "Apple"};

c) var items = new array("Orange", "Apple");

d) var items[] = {"Orange", "Apple"};

Answer a) and c) are two ways to do that

 

JavaScript: What is the output of the following code

foo = 1;

(function() {

   foo = 2;

})();

var x = function () {

  foo = 3;

};

(function() {

   var foo = 4;

})();

console.log(foo);


Answer: Console prints 2
this is becuase  there is no var keyword with foo so it becomes global
and console.log is not called inside any function so it is accessign the global context in this case.
