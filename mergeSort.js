// ==== Merge Sort ====
// Write a function mergeSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. A good way to implement this is to write one function, for instance merge, which is responsible for merging two sorted arrays, and another function, for instance mergeSort, which is responsible for the recursion that produces single-item arrays to feed into merge. Good luck!

const list = [23, 4, 42, 15, 16, 8, 3];
const list2 = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

const mergeSort = (list) =>{
  if(list.length <= 1) return list;
  const middle = list.length / 2 ;
  const left = list.slice(0, middle);
  const right = list.slice(middle, list.length);
  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  var result = [];
  while(left.length || right.length) {
    if(left.length && right.length) {
      if(left[0] < right[0]) {
        result.push(left.shift())
      } else {
        result.push(right.shift())
      }
    } else if(left.length) {
        result.push(left.shift())
    } else {
        result.push(right.shift())
    }
  }
  return result;
}

// --- 2 ---
// function mergeSort (arr) {
// 	if(arr.length <= 1) return arr;
// 	var mid = arr.length / 2;
// 	var left = arr.slice(0, mid);
// 	var right = arr.slice(mid, arr.length);
// 	return merge(mergeSort(left), mergeSort(right));
// }

// function merge (left, right) {
// 	var rslt = [];

// 	while (left.length || right.length) {
// 		if (left.length && right.length) {
// 			if (left[0] < right[0]) {
// 				rslt.push(left.shift());
// 			} else {
// 				rslt.push(right.shift());
// 			}
// 		} else if (left.length) {
// 			rslt.push(left.shift());
// 		} else {
// 			rslt.push(right.shift());
// 		}
// 	}
// 	return rslt;
// }

console.log(mergeSort(list)) // [ 3, 4, 8, 15, 16, 23, 42 ]
console.log(mergeSort(list2)) // [ 1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643 ]
