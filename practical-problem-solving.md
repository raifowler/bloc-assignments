**Exercises**

> Help! Customers are not getting their products from the following assembly line.

```javascript
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
   product.loadOnTruck;

   return product;
 };
```

The output you see is:

```javascript
 "Basic product created."
 "Painting product black."
 "Product painted black."
 "Packaging product for Next Day."
 "Product packaged for Next Day."
```

Based on this output, how would you figure out what the problem is? Identify the line(s) that are broken.

A: First I would read the stack, to identify what went right so I can isolate where it went wrong. It worked up until the loadOnTruck function. Looking back over the code I see that the loadOnTruck function is missing parenthesis after it. Currently it reads `product.loadOnTruck;`, it should read `product.loadOnTruck()`. After adding the parenthesis, it works like it should. 

> Another assembly line is broken!

```javascript
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
   product.package();

   // Loading Station: product is loaded onto a truck.
   product.loadOnTruck();

   return product;
 };
```

The output you see is:

```javascript
"Basic product created."
 "Painting product black."
 "Product painted black."
 "Packaging product for undefined."
 "Product packaged for undefined."
 "Loading product onto truck."
 "Product loaded onto the truck."
```

Narrow it down! What line(s) are broken? Submit the answer.

A: The broken line here is `product.package();`. It doesn't have the variable `shippingType` defined as the prototype does, so it doesn't take in a variable when the function is called. As a result it returns undefined for the shipping type. 