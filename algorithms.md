**Exercises**

> Out of the sorting algorithms introduced, or any others you have encountered, which is the quickest or most efficient in sorting a set of data and why?

A: It seems like quick sort and merge sort are the quickest or most efficient for larger sets of data. They both use the divide and conquer technique which can significantly decrease the amount of time it takes to find the number you're looking for. Contrast that with bubble sort where you start at one end of the array and work your way to the other end making swaps all the way down the line if needed. Efficiency also depends on the number swaps that have to be made, so for a small data set it might not be worth it to use quick sort or merge sort, since it would be easier to implement bubble sort. 

> Why is Binary Search more efficient than Linear Search for most cases?

A: Binary search uses the divide and conquer technique which is significantly faster than moving one by one through an array. This also applies in troubleshooting. If you have a large network with a problem in it, you isolate the problem using divide and conquer. Cut the network in half, and check there, if the problem is before, you move backward, if it's after, you move forward. Repeat this until you find the problem. If you are searching for the number 60 out of options of numbers 1 to 100, it would take 60 searches using linear search. It would only take 6-8 using binary search. 

> Code an implementation of Bubble Sort and test it on an integer array of your choice.

```javascript
const integerSort = function(integers) {
  do {
    var swapped = false;
    integers.forEach((int, i) => {
      if(int > integers[i + 1]) {
        let temp = int;
        integers[i] = integers[i + 1];
        integers[i + 1] = temp;
        swapped = true;
      }
    })
  } while (swapped === true)
  return integers;
}

console.log(integerSort([1,5,3,9,7,20,2]));
```