
/**
 * Selection sort.<br><br>
 * Time complexity: O(N^2).
 *
 * @example
 *
 * var sort = require('path-to-algorithms/src/sorting/'+
 * 'selectionsort').selectionSort;
 * console.log(sort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
 *
 * @public
 * @module sorting/selectionsort
 * @param {Array} array Input array.
 * @param {Function} cmp Optional. A function that defines an
 * alternative sort order. The function should return a negative,
 * zero, or positive value, depending on the arguments.
 * @return {Array} Sorted array.
 */
export function selectionSort(array, cmp = (a, b) => a - b) {
    let min;
    let idx;
    let temp;
	array.forEach(function(outer, i, array) {
		idx = i;
		min = outer;
		for (var j = i + 1; j < array.length; j += 1) {
			if (cmp(min, array[j]) > 0) {
				min = array[j];
				idx = j;
			}
		}
		temp = outer;
		array[i] = min;
		array[idx] = temp;
    });
    return array;
}
