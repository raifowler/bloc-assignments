
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
