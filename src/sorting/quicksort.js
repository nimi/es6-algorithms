/**
 * The quicksort algorithm. It's complexity is O(nlog n).
 *
 * @public
 */

const isEmpty = (arr) => ! arr.length;

function partition(arr, fn) {
	let xs = [], ys = [], len = arr.length, i, e;

	for (i = 0; i < len; i++) {
		e = arr[i];
		(fn(e) ? xs : ys).push(e);
	}

	return [xs, ys];
}

function qsort(arr, cmp = (a, b) => a - b) {
	if (isEmpty(arr)) return [];
	const [head, ...tail] = arr;
	const concat = (low, high) =>
		[].concat(qsort(low, cmp), head, qsort(high, cmp));

	return concat(...partition(tail, _ => cmp(_, head) < 0));
}


/**
 * Calls the quicksort function with it's initial values.
 *
 * @public
 * @param {array} array The input array which should be sorted
 * @returns {array} array Sorted array
 */
export function quickSort(array, cmp) {
    cmp = cmp || compare;
    return qsort(array, cmp);
};


