"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shellSort = shellSort;

/**
 * Shellsort which uses the gaps 701, 301, 132, 57, 23, 10, 4, 1 and
 * insertion sort to sort sub-arrays which match for the different gaps.
 *
 * @example
 *
 * var sort = require('path-to-algorithms/src/' +
 * 'sorting/shellsort').shellSort;
 * console.log(sort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
 *
 * @public
 * @module sorting/shellsort
 * @param {Array} array Input array.
 * @param {Function} cmp Optional. A function that defines an
 * alternative sort order. The function should return a negative,
 * zero, or positive value, depending on the arguments.
 * @return {Array} Sorted array.
 */
function shellSort(array) {
  var cmp = arguments.length <= 1 || arguments[1] === undefined ? function (a, b) {
    return a - b;
  } : arguments[1];

  var gaps = new Set([701, 301, 132, 57, 23, 10, 4, 1]);
  var current = undefined;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = gaps[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var gap = _step.value;

      for (var i = gap; i < array.length; i += gap) {
        current = array[i];
        // i = 4; gap = 4; j = 4;
        for (var j = i; j >= gap && cmp(array[j - gap], current) > 0; j -= gap) {
          array[j] = array[j - gap];
        }
        array[j] = current;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return array;
}