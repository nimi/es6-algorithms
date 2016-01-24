import 'babel-polyfill';

function* range(begin, end, interval = 1) {
	for (let i = begin; i < end; i += interval) { yield i; }
}

/**
 * Bubble sort algorithm.<br><br>
 * Complexity: O(N^2).
 *
 * @example
 * var sort = require('path-to-algorithms/src/' +
 * 'sorting/bubblesort').bubbleSort;
 * console.log(sort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
 *
 * @public
 * @module sorting/bubblesort
 * @param {Array} array Input array.
 * @param {Function} cmp Optional. A function that defines an
 * alternative sort order. The function should return a negative,
 * zero, or positive value, depending on the arguments.
 * @return {Array} Sorted array.
 */

export function bubbleSort(array, cmp = (a, b) => a - b) {
	const swap = index => {
		const temp = array[index];
		array[index] = array[index - 1];
		array[index - 1] = temp;
	};

	//	array.forEach((_, outerIndex) => {
	for (let outerIndex of range(0, array.length)) {
//		for (let innerIndex = outerIndex; innerIndex > 0; innerIndex -= 1) {
		for (let innerIndex of range(outerIndex, 0, -1))
		if (cmp(array[innerIndex], array[innerIndex - 1]) < 0) {
				swap(innerIndex);
			}
		}
	}
//	});
	return array;
}
