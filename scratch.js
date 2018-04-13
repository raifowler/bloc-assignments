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
