







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
