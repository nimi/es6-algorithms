'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeSort = mergeSort;
var ll = require('../data-structures/linked-list.js');

/**
 * Devides and sort merges two subarrays of given array
 *
 * @public
 * @module sorting/mergesort/merge
 * @param {Array} array The array which subarrays should be sorted.
 * @param {Number} start The start of the first subarray.
 *   This subarray is with end middle - 1.
 * @param {Number} middle The start of the second array.
 * @param {Number} end end - 1 is the end of the second array.
 * @returns {Array} The array with sorted subarray.
 *
 * @example
 * var array = [1, 2, 3, 1, 4, 5, 6];
 * var merge =
 *    require('path-to-algorithms/src/sorting/mergesort').merge;
 * merge(array, function (a, b) {  // [1, 1, 2, 3, 4, 5, 6]
 *  return a - b;
 * }, 0, 4, 7);
 */
var merge = function merge(array, cmp, start, middle, end) {
  var left = new ll.LinkedList();
  var right = new ll.LinkedList();

  var leftSize = middle - start;
  var rightSize = end - middle;
  var maxSize = Math.max(leftSize, rightSize);
  var size = end - start;
  var i = undefined;

  for (i = 0; i < maxSize; i += 1) {
    if (i < leftSize) {
      left.push(array[start + i]);
    }
    if (i < rightSize) {
      right.push(array[middle + i]);
    }
  }
  i = 0;
  while (i < size) {
    if (left.first && right.first) {
      if (cmp(left.first.data, right.first.data) > 0) {
        array[start + i] = right.shift().data;
      } else {
        array[start + i] = left.shift().data;
      }
    } else if (left.first) {
      array[start + i] = left.shift().data;
    } else {
      array[start + i] = right.shift().data;
    }
    i += 1;
  }
  return array;
};

/**
 * Mergesort method which is recursively called for sorting the input array.
 *
 * @public
 * @module sorting/mergesort
 * @param {Array} array The array which should be sorted.
 * @param {Function} cmp Compares two items in an array.
 * @param {Number} start Left side of the subarray.
 * @param {Number} end Right side of the subarray.
 * @returns {Array} Array with sorted subarray.
 *
 * @example
 * var array = [2, 4, 1, 5, 6, 7];
 * var mergeSort =
 *    require('path-to-algorithms/src/sorting/mergesort').mergeSort;
 * mergeSort(array); // [1, 2, 4, 5, 6, 7]
 */
function mergeSort(array) {
  var cmp = arguments.length <= 1 || arguments[1] === undefined ? function (a, b) {
    return a - b;
  } : arguments[1];
  var start = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
  var end = arguments.length <= 3 || arguments[3] === undefined ? array.length : arguments[3];

  if (Math.abs(end - start) <= 1) {
    return [];
  }
  var middle = Math.ceil((start + end) / 2);

  mergeSort(array, cmp, start, middle);
  mergeSort(array, cmp, middle, end);

  return merge(array, cmp, start, middle, end);
}