**Questions**

> What does "DRY" stand for? What does the "DRY principle" imply in programming or software development?

A: DRY stands for Don't Repeat Yourself. The DRY principle implies that you want your code to be written in such a way that you never have to repeat the same function, object, variable, etc. You want to utilize the capabilities of the language your using that allow you to set a prototype, function, object, etc. in such a way that if you need to use it again you don't need to rewrite the same code you already used. Instead you should be able to use a simplified minimal callback to create an instance of what you have already done.

**Code**

```JavaScript
class Product {
  constructor (description, price) {
    this.description = description;
    this.price = price;
  }

  getDescription () {
    return "Description: " + this.description;
  }

  getPrice () {
    return "Price: " + this.price;
  }
}

class Shirt extends Product {
  constructor (description, price) {
    super(description, price);
  }
}

class Jacket extends Product {
  constructor (description, price) {
    super(description, price);
  }
}

class Scarf extends Product {
  constructor (description, price) {
    super(description, price);
  }
}

let trenchCoat = new Jacket('Trench Coat', 50);
console.log(trenchCoat.getDescription());
console.log(trenchCoat.getPrice());

let tShirt = new Shirt('T-Shirt', 15);
console.log(tShirt.getDescription());
console.log(tShirt.getPrice());

let infinity = new Scarf('Infinity Scarf', 8);
console.log(infinity.getDescription());
console.log(infinity.getPrice());
```
