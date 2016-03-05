"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.countingSort = countingSort;
/**
 * Gets the count of the elements into the input array.
 *
 * @private
 * @param {Array} array The input array.
 * @return {Array} The count of each element from the input array.
 */
var getCount = function getCount(array) {
    var count = [];
    var current = undefined;
    for (var i = 0; i < array.length; i += 1) {
        current = array[i];
        count[current] = (count[current] || 0) + 1;
    }
    return count;
};

/**
 * Gets the count of the elements which are less than a given.
 *
 * @private
 * @param {Array} array The input array.
 * @return {Array} less The count of the elements which.
 * are less than each element from the input.
 */
var getLessCount = function getLessCount(array) {
    var less = [];
    var last = undefined;
    less[0] = array[0] || 0;
    for (var i = 1; i < array.length; i += 1) {
        last = array[i - 1] || 0;
        less[i] = last + less[i - 1];
    }
    return less;
};

/**
 * Sorts the input array.
 *
 * @private
 * @param {Array} array Input which should be sorted.
 * @param {Array} less Count of the less elements for each element.
 * @return {Array} The sorted input.
 */
var sort = function sort(array, less) {
    var result = [];
    var currentPositions = [];
    var current = undefined;
    var position = undefined;
    for (var i = 0; i < array.length; i += 1) {
        current = array[i];
        position = less[current];
        if (currentPositions[current] === undefined) {
            currentPositions[current] = position;
        }
        result[currentPositions[current]] = current;
        currentPositions[current] += 1;
    }
    return result;
};

/**
 * Counting sort algorithm. It's correct only
 * for array of integers.<br><br>
 * Time complexity: O(N).
 *
 * @example
 * var sort = require('path-to-algorithms/src/' +
 * 'sorting/countingsort').countingSort;
 * console.log(sort([2, 5, 1, 3, 4])); // [ 1, 2, 3, 4, 5 ]
 *
 * @public
 * @module sorting/countingsort
 * @param {Array} array Array which should be sorted.
 * @return {Array} Sorted array.
 */
function countingSort(array) {
    var less = getLessCount(getCount(array));
    return sort(array, less);
};