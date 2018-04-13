**Questions**

> What is object oriented programming?

A: Object oriented programming is programming that is centered around objects and data instead of functions or logic.

> What is a constructor?

A: A constructor is a method used to create and initialize a class.

> What is the purpose of the keyword `super`?

A: The keyword `super` calls the parent constructor, and eliminates the need to duplicate the constructor parts that are common between parent and child.

> What are classes that do not use the keyword `extends` called?

A: Classes that do not use the keyword `extends` are parent classes.

**Code**
```javascript
class Clothes {
  constructor (name, size, price) {
    this.name = name;
    this.size = size;
    this.price = price;
  }

  getNameSizePrice() {
    return `${this.name} ${this.size} ${this.price}`;
  }
}

class Shirt extends Clothes {
  constructor() {
    super('Biker Jacket', 'medium', 20);
  }
}

var mediumBiker = new Shirt();
console.log(mediumBiker.getNameSizePrice());
```
