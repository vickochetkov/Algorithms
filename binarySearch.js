


function binarySearch(arr, target) {
    let left = 0,
    right = arr.length - 1;
    while (left <= right) { 		// No more elements in the array.
		// Find the middle of the array.
        const mid = left + Math.floor((right - left) / 2);
        if (target === arr[mid]) return mid; // Found the Target!
        if (target > arr[mid]) { // Target is in the half from mid+1 to right.
            left = mid + 1;
        } else { 	// Target is in the half from left to mid-1.
            right = mid - 1;
        }
    }
    return -1;
}

// --- with Recursion ---
// function binarySearch(arr, item, low, high) {
//     if (low > high) { // No more elements in the array.
//         return null;
//     }

//     // Find the middle of the array.
//     var mid = Math.ceil((low + high) / 2);

//     if (arr[mid] === item) { // Found the item!
//         return mid;
//     }

//     if (item < arr[mid]) { // Item is in the half from low to mid-1.
//         return binarySearch(arr, item, low, mid-1);
//     }

//     else { // Item is in the half from mid+1 to high.
//         return binarySearch(arr, item, mid+1, high);
//     }
// }

var numbers = [1,2,3,4,5,6,7];
console.log(binarySearch(numbers, 5));
