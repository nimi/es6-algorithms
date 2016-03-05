"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recursiveInsertionSort = recursiveInsertionSort;
/**
 * Recursive version of insertion sort.<br><br>
 * Time complexity: O(N^2).
 *
 * @example
 *
 * var sort = require('path-to-algorithms/src/sorting/'+
 * 'recursive-insertionsort').recursiveInsertionSort;
 * console.log(sort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
 *
 * @public
 * @module sorting/recursive-insertionsort
 * @param {Array} array Input array.
 * @param {Function} cmp Optional. A function that defines an
 * alternative sort order. The function should return a negative,
 * zero, or positive value, depending on the arguments.
 * @param {Number} max Optional. Index of the element which place
 * we should find in the current function call.
 * @return {Array} Sorted array.
 */
function recursiveInsertionSort(array) {
  var cmp = arguments.length <= 1 || arguments[1] === undefined ? function (a, b) {
    return a - b;
  } : arguments[1];
  var max = arguments.length <= 2 || arguments[2] === undefined ? array.length - 1 : arguments[2];

  if (max <= 0) {
    return array;
  }

  recursiveInsertionSort(array, cmp, max - 1);
  for (var i = max - 1, current = array[max]; i >= 0 && cmp(current, array[i]) < 0; i -= 1) {
    array[i + 1] = array[i];
  }
  array[i + 1] = current;
  return array;
}