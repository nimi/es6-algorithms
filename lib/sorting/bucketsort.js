"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bucketSort = bucketSort;

/**
 * Insertionsort.
 *
 * @private
 * @param {array} array Input array
 * @returns {array} array Sorted input array
 */
var insertionSort = function insertionSort(array) {
    var current = undefined;
    var j = undefined;
    for (var i = 1; i < array.length; i += 1) {
        current = array[i];
        j = i - 1;
        while (j >= 0 && current < array[j]) {
            array[j + 1] = array[j];
            j -= 1;
        }
        array[j + 1] = current;
    }
    return array;
};

/**
 * Creates buckets for given array
 *
 * @private
 * @param {array} array Input array
 * @returns {array} buckets Array whith array for each bucket.
 *                          Each bucket contains an array with all elements
 *                          from the input which are with suitable size.
 */
var createBuckets = function createBuckets(array) {
    var buckets = [];
    var currentBucket = undefined;
    var current = undefined;
    for (var i = 0; i < array.length; i += 1) {
        current = array[i];
        currentBucket = Math.floor(current);
        buckets[currentBucket] = buckets[currentBucket] || [];
        buckets[currentBucket].push(current);
    }
    return buckets;
};

/**
 * Sorts the arrays from each bucket.
 *
 * @private
 * @param {array} buckets Given buckets
 * @returns {array} buckets Buckets with sorted arrays for each bucket
 */
var sortBuckets = function sortBuckets(buckets) {
    for (var i = 0; i < buckets.length; i += 1) {
        if (buckets[i] !== undefined) {
            insertionSort(buckets[i]);
        }
    }
    return buckets;
};

/**
 * Unions all buckets' arrays
 *
 * @private
 * @param {array} buckets Input buckets
 * @returns {array} result Sorted array which contains
 *                         all elements form each bucket
 */
var unionBuckets = function unionBuckets(buckets) {
    var result = [];
    var currentBucket = undefined;
    for (var i = 0; i < buckets.length; i += 1) {
        currentBucket = buckets[i];
        if (currentBucket !== undefined) {
            result = result.concat(currentBucket);
        }
    }
    return result;
};

/**
 * Sorts given array with bucketsort.<br><br>
 * Time complexity: O(N) in case the
 * data is with uniform distribution.
 *
 * @example
 *
 * var sort = require('path-to-algorithms/src/'+
 * 'sorting/bucketsort').bucketSort;
 * console.log(sort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
 *
 * @public
 * @module sorting/bucketsort
 * @param {Array} array Input array which should be sorted.
 * @return {Array} Sorted array.
 */
function startSort(create, sort, union, array) {
    var buckets = create(array);
    sort(buckets);
    return union(buckets);
};

function bucketSort(array) {
    return startSort(createBuckets, sortBuckets, unionBuckets, array);
}