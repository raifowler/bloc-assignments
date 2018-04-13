**Questions**

> What does "lexical scope" mean in JavaScript?

A: Lexical scope means that a variable can only be referenced within the block of code that it is defined.

> What is an advantage of a programming language that uses lexical scoping?

A: exical scoping provides more flexibility because you can define variables that are only needed for one function inside the function and will not impact the rest of your code.

> What is a closure?

A: A closure is when a function is inside of another function.

> What would be a use case of a closure?

A: You could create a primary function that uses different case functions that are defined inside of it depending on the need or input.

**Code**
```JavaScript

function raimondJob(title) {
	return function(prefix) {
  	return prefix + ' ' + title;
  };
}

var technician = raimondJob('Technician');
var supervisor = raimondJob('Supervisor');

console.log(technician('Broadband'));
console.log(supervisor('Field Service'));

```
