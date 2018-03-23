**Questions**

> What does the acronym DOM stand for and explain in your own words what it is.

A: DOM stands for document object model, and it is the JavaScript version of all the html elements on a page.

> How does the DOM make programming more efficient?

A: The DOM makes programming more efficient because instead of switching back and forth between html, CSS, and JavaScript you can use JavaScript to manipulate the html and CSS.

**Code**
```JavaScript
let list = document.getElementById('list');

let li2 = document.createElement('li');

li2.innerText = 'Mens T-shirt';

list.prepend(li2);
```
