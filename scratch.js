const even = function(num) {
  if (num % 2 === 0 && num !== 0) {
    return true;
  } else {
    return false;
  }
};

console.log(even(2));


const squared = function(num) {
  return num * num;
};

console.log(squared(5));


const food = function() {
  return ['Steak', 'Pasta', 'Ice Cream'];
};

console.log(food());


const menu = function() {
  let menuItems = {
    steak: 34.99,
    pasta: 21.99,
    iceCream: 12.99
  }
  return menuItems;
};

console.log(menu());



// const integerSort = function(integers) {
//   do {
//     var swapped = false;
//     integers.forEach((int, i) => {
//       if(int > integers[i + 1]) {
//         let temp = int;
//         integers[i] = integers[i + 1];
//         integers[i + 1] = temp;
//         swapped = true;
//       }
//     })
//   } while (swapped === true)
//   return integers;
// }

// console.log(integerSort([1,5,3,9,7,20,2]));
