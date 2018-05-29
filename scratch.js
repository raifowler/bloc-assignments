// Prototype for a product
var Product = {
  isPackaged: false,
  isLoaded: false,
  color: "uncolored",
  paint: function (color) {
    // The Painting Station will paint the product the desired color.
    console.log("Painting product " + color + ".");
    this.color = color;
    console.log("Product painted " + color + ".");
  },
  package: function (shippingType) {
    // The Packaging Station will package the product for the shipping type specified.
    // E.g. Next Day Shipping
    console.log("Packaging product for " + shippingType + ".");
    this.shippingType = shippingType;
    this.isPackaged = true;
    console.log("Product packaged for " + shippingType + ".");
  },
  loadOnTruck: function () {
    // The Loading Station will load the product on a truck to be shipped
    // to the customer.
    console.log("Loading product onto truck.");
    this.isLoaded = true;
    console.log("Product loaded onto the truck.");
  }
};

var order = function (color, shippingType) {
  // Creation Station: basic product is created.

  // Object.create will create a new object that has Product as
  // the prototype of that object. This means that any property lookups
  // performed will look first at the instance and then at Product.
  var product = Object.create(Product);

  console.log("Basic product created.");

  // Painting Station: product is painted.
  product.paint(color);

  // Packaging Station: product is packaged to be shipped.
  product.package(shippingType);

  // Loading Station: product is loaded onto a truck.
  product.loadOnTruck();

  return product;
};

order("red", "next day");