// ==== Find the Symmetric Difference ====
// Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

// Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). The resulting array must contain only unique values (no duplicates).

// --- Basic Code Solution: ---
// function sym() {
// 	    var args = [];
//     for (var i = 0; i < arguments.length; i++) {
//         args.push(arguments[i]);
//     }

//     function symDiff(arrayOne, arrayTwo) {
//         var result = [];

//         arrayOne.forEach(function(item) {
//             if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
//                 result.push(item);
//             }
//         });

//         arrayTwo.forEach(function(item) {
//             if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
//                 result.push(item);
//             }
//         });

//         return result;
//     }
//     // Apply reduce method to args array, using the symDiff function
//   return args.reduce(symDiff);
// }

// --- Intermediate Code Solution: ---
function sym() {

  // Convert the argument object into a proper array
  var args = Array.prototype.slice.call(arguments);

  // Return the symmetric difference of 2 arrays
  var getDiff = function(arr1, arr2) {

    // Returns items in arr1 that don't exist in arr2
    function filterFunction(arr1, arr2) {
      return arr1.filter(function(item) {
        return arr2.indexOf(item) === -1;
      });
    }

    // Run filter function on each array against the other
    return filterFunction(arr1, arr2)
      .concat(filterFunction(arr2, arr1));
  };

  // Reduce all arguments getting the difference of them
  var symarray = args.reduce(getDiff, []);

  // Run filter function to get the unique values
  var unique = symarray.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
    });
  return unique;
}

// --- Advanced Code Solution: ---
// function sym() {
//   // difference between set A and set B
//   const diff = (A, B) => new Set([...A].filter(n => !B.has(n)));
//   // spread operator to convert array like object to array
//   const result = [...arguments]
//     // map elements in arguments (array) to Set
//     .map(arr => new Set(arr))
//     // using the formula in https://en.wikipedia.org/wiki/Symmetric_difference
//     // i reduce it by uniting the diff(A, B) and diff(B, A)
//     .reduce((acc, set) => new Set([...diff(acc, set), ...diff(set, acc)]));

//   // convert the set to array by using spread operator again
//   return [...result];
// }

// test here
console.log(sym([1, 2, 3], [5, 2, 1, 4])); // should return [3, 4, 5].
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4])); // should return [3, 4, 5].
console.log(sym([1, 2, 3], [5, 2, 1, 4, 5])); // should return [3, 4, 5].
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])); // should return [1, 4, 5]
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])); // should return [1, 4, 5].
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])); // should return [2, 3, 4, 6, 7].
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])); // should return [1, 2, 4, 5, 6, 7, 8, 9].
