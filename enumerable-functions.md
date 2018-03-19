**Questions**

> Describe a `map` method.

A: The `map` method will create a new array by iterating over an existing array and performing a defined function to each item within the array.

> Describe a `filter` method.

A: The `filter` method will create a new array by defining a condition, and iterating over each item in an existing array removing all items that evaluate to `false`.

> What is the difference between the `map()` and the `filter()` function?

A: The difference between the `map` and `filter` function is that the `map` function transforms each item within an array equally by applying the same function to each item, whereas the `filter` function only transforms items whose condition evaluates to `false`. 

**Code**
```javascript
var numbers = [1,2,3,4,5,6,7,8,9,2,3,4,5,6,1,2,3,4,5,6,7,8,8,4,3,2];

var total = numbers
  .filter(item => item < 4)
  .reduce((total, item) => total + item);

console.log(total);
```
