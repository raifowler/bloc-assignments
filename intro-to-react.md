**Questions**

> In your own words, explain React's Virtual DOM. What gives React its fast performance?

A: React's Virtual DOM is like a second DOM that works in the background of each component. When the view changes, the Virtual DOM is compared with the DOM to determine what is different. Only the differences are updated in the actual DOM. This means that minimal changes are being made. Contrast this with releading an entire page, or an entire portion of a page, and you can see why it would be faster. This is why React performs so fast. This method of minimal changes eliminates page loading overhead of changing parts of the page that don't need to be changed. 

> In your own words, describe React's core concept of uni-directional data flow. Draw diagrams to illustrate. Discuss the answer with your mentor in your next session. 

A: The difference between unidirectional data flow and 2 way data binding is that in unidirectional data flow your data moves in one direction. You only ever have one representation of data, the model, and it is the only source that changes the view. In 2 way data binding you have 2 seperate data sources that change one another, the model and the view influence one another back and forth. 