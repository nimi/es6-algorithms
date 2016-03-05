"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertionSort = insertionSort;
/**
 * Insertionsort algorithm.<br><br>
 * Time complexity: O(N^2).
 *
 * @example
 *
 * var sort = require('path-to-algorithms/lib' +
 * '/sorting/insertion-sort').insertionSort;
 * console.log(sort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
 *
 * @public
 * @module sorting/insertionsort
 * @param {Array} array Input array.
 * @param {Function} cmp Optional. A function that defines an
 * alternative sort order. The function should return a negative,
 * zero, or positive value, depending on the arguments.
 * @return {Array} Sorted array.
 */
function insertionSort(array) {
  var cmp = arguments.length <= 1 || arguments[1] === undefined ? function (a, b) {
    return a - b;
  } : arguments[1];

  var current = undefined;
  var j = undefined;

  array.forEach(function (item, i) {
    current = item;
    j = i - 1;
    while (j >= 0 && cmp(array[j], current) > 0) {
      array[j + 1] = array[j];
      j -= 1;
    }
    array[j + 1] = current;
  });
  return array;
}