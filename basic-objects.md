**Questions**

> In your own words, what is a JavaScript object?

A: A JavaScript object is an array of properties made up of key, value pairs.

> What is a property of a JavaScript object?

A: A property of a JavaScript object is made up of a key and a value, and can be called as a method of the object.

**Code**
```JavaScript
class Clothes {
  constructor (name, size, price) {
    this.name = name;
    this.size = size;
    this.price = price;
  }
}

let shirt = new Clothes('Biker Jacket', 'medium', 20);

console.log(shirt);
```
