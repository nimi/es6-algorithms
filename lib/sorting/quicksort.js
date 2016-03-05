"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.quickSort = quickSort;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

/**
 * The quicksort algorithm. It's complexity is O(nlog n).
 *
 * @public
 */

var isEmpty = function isEmpty(arr) {
  return !arr.length;
};

function partition(arr, fn) {
  var xs = [],
      ys = [],
      len = arr.length,
      i = undefined,
      e = undefined;

  for (i = 0; i < len; i++) {
    e = arr[i];
    (fn(e) ? xs : ys).push(e);
  }

  return [xs, ys];
}

function qsort(arr) {
  var cmp = arguments.length <= 1 || arguments[1] === undefined ? function (a, b) {
    return a - b;
  } : arguments[1];

  if (isEmpty(arr)) return [];

  var _arr = _toArray(arr);

  var head = _arr[0];

  var tail = _arr.slice(1);

  var concat = function concat(low, high) {
    return [].concat(qsort(low, cmp), head, qsort(high, cmp));
  };

  return concat.apply(undefined, _toConsumableArray(partition(tail, function (_) {
    return cmp(_, head) < 0;
  })));
}

/**
 * Calls the quicksort function with it's initial values.
 *
 * @public
 * @param {array} array The input array which should be sorted
 * @returns {array} array Sorted array
 */
function quickSort(array) {
  var cmp = arguments.length <= 1 || arguments[1] === undefined ? function (a, b) {
    return a - b;
  } : arguments[1];

  return qsort(array, cmp);
};