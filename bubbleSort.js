// ==== Bubble Sort ====
//  Write a function bubbleSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

function bubbleSort(array) {
	var sorting = true;

	while (sorting) {
		sorting = false;

		for (var i = 0; i < array.length; i++) {
			var cur = array[i];
			var next = array[i + 1];

			if (cur > next) {
				let temp = next;
				array[i + 1] = cur;
				array[i] = temp;
				sorting = true;
			}
		}
	}
  return array;
}

var arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
console.log(bubbleSort(arr));
