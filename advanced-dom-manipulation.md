**Questions**

> What is the difference between `document.querySelector()` and `document.querySelectorAll`?

A: `document.querySelector()` will select the first element of the provided selector or group of selectors, whereas `document.querySelectorAll()` will return an array like object of all elements of the provided selector or group of selectors.

> What is the difference between `getElement(s)By` and `querySelector(All)`?

A: `getElement(s)By` takes very specific types of selectors, whereas `querySelector(All)` can have multiple types of selectors passed into it. Overall `querySelector(All)` is much more flexible, but `getElement(s)By` loads quicker and is preferred when it can be used. In cases where more flexibility is needed `querySelector(All)` can be used.

> What do JavaScript event handlers do and what is an example of one?

A: JavaScript event handlers provide a way to create interactive actions when a certain event is triggered. An example of an event handler would be the `.onClick` event handler. This will cause an action to occur when the specified element is clicked.

**Code**
```html
<h3>Shirts</h3>
<ul id='list'>
<li>Biker Jacket</li>
<li>Mens Shirt</li>
</ul>
```

```JavaScript
const shirt = document.getElementById('list');

shirt.onclick = (e) => {
  console.log(e.target.innerText);
}
```
