**Questions**

> What are the three types of conditional statements?

A: The three kinds of conditional statements are `if`, `else`, and `else if`.

> What are four types of Comparison Operators and how would you use them?

A: Four types of comparison operators are:

* Equality operator - Could be used when you are comparing two values and setting a condition that is based on those values being equal without regard to the data type.  
* Strict equality operator - Could be used when you are comparing two values and setting a condition that is based on those values being equal with regard to the data type.
* Greater than operator - Could be used when setting a condition that will continue until the value of a variable reaches the greater than limit.
* Less than operator - Could be used when setting a condition that will continue until the value of a variable reaches the less than limit.

**Code**

```javascript

var grade = A;

if (grade == A) {
  console.log("Congratulations! You passed");
} else if (grade == B) {
  console.log("Congratulations! You passed");
} else if (grade == C) {
  console.log("Congratulations! You passed");
} else {
  console.log("You failed this assignment, better luck next time.");
}


```
