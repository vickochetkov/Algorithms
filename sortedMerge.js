// === Sorted Merge (Cracking Coding Interview) ===
// You are given two sorted arrays, A and B, where A has a large enough buffer at the end to hold B. Write a method to merge B into A in sorted order.

const A = [1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643];
const B = [3, 4, 8, 15, 16, 23, 42];

const merge = (arrA, arrB) => {
	var rslt = [];
	while (arrA.length || arrB.length) {
		if (arrA.length && arrB.length) {
			if (arrA[0] < arrB[0]) {
				rslt.push(arrA.shift());
			} else {
				rslt.push(arrB.shift());
			}
		} else if (arrA.length) {
			rslt.push(arrA.shift());
		} else {
			rslt.push(arrB.shift());
		}
	}
	return rslt;
}

console.log(merge(A, B)); // [ 1, 1, 2, 2, 3, 4, 4, 8, 8, 15, 16, 23, 32, 42, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643 ]
