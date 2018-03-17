**Questions**

>What are the three things you need to provide for a loop? I.e. `for(a; b; c;)`, what are a, b, and c?

A: The three things you need to provide for a loop are the initialization(a), the condition(b), and the final expression(c).

> Describe infinite loops and how to avoid them.

A: Infinite loops are loops that never end because their condition will never evaluate to false. In order to avoid an infinite loop you have to make sure that your condition will evaluate to false at some point.

**Code**
```javascript
var shoppingCart = [
  {
    id: 0,
    name: 'Mens Shirt',
    price: 20,
    size: 'Large'
  },
  {
    id: 1,
    name: 'kids shirt',
    price: 15,
    size: 'small',
  }
]

for (var i = 0; i < shoppingCart.length; i++) {
  console.log(shoppingCart[i].name);
}
```
