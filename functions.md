**Questions**

> Describe/define DRY and why functions exist.

A: DRY stands for don't repeat yourself and it is a principle used in programming that means your code should be broken down into components that each have a single responsibility. Basically you want to write the minimal amount of code possible to achieve your end result, and you don't want to repeat yourself at any time in your code. Functions empower you to do this by storing simple and complex tasks that need to be repeated in a single function name that can be called on over and over again to repeat that function.

> Describe/define the difference between creating a function and calling/executing a function.

A: When you create a function you initially name it, define the parameters, and write out the entirety of the tasks that the function will execute. When you call it, or execute it, you simply have to write the name of the function and it's parameters.

> Describe/define what arguments/parameters are and how they relate to functions.

A: Parameters are inputs of a function that you pass into a function when executing it.

> Describe/define mutating (dirty) vs non-mutating (pure) functions.

A: A mutating function is a function that changes an existing object or data structure, whereas a non-mutating function is a function that creates a new object or data structure and leaves the existing object as it was. 

**Code**
```javascript
var shoppingCart = [20, 15];

function getTotalCost(prices) {
  let total = 0;
  total = prices.reduce((total, price) => total + price);
  return total;
}

getTotalCost(shoppingCart);
```
