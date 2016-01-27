const charAt = (str, i) => i < str.length ? str.charCodeAt(i) : -1;

const swap = (arr, first, second) => {
	const temp = arr[second];
	arr[second] = arr[first];
	arr[first] = temp;
}

function sort(arr, lo, hi, d) {
	if (lo >= hi) { return; }

	let lowPointer = lo;
	let highPointer = hi;
	const p = charAt(arr[lo], d);
	let i = lo + 1;

	while (i <= highPointer) {
		let current = charAt(arr[i], d);
		if (current < p) {
			swap(arr, i, lowPointer);
			lowPointer += 1;
		} else if (current > p) {
			swap(arr, i, highPointer);
			highPointer -= 1;
			i += 1;
		} else {
			i += 1;
		}
	}

	sort(arr, lo, lowPointer - 1, d);
	if (p >= 0) {
		sort(arr, lowPointer, highPointer, d + 1);
	}
	sort(arr, highPointer + 1, hi, d);
}

/**
 * Effective inplace string sorting algorithm.
 * Algorithm is NOT stable.
 *
 * @example
 *
 * var sort = require('path-to-algorithms/src/sorting'+
 * '/3-way-string-quicksort').quicksort;
 * console.log(sort(['bb', 'aa', 'cc'])); // [ 'aa', 'bb', 'cc' ]
 *
 * @public
 * @module sorting/3-way-string-quicksort
 * @param arr {Array} array which should be sorted.
 * @return {Array} Sorted array.
 */
export function quicksort(arr) {
	sort(arr, 0, arr.length - 1, 0);
	return arr;
};
