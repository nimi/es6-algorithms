'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.bubbleSort = bubbleSort;

require('babel-polyfill');

var _marked = [range].map(regeneratorRuntime.mark);

function range(begin, end) {
	var interval = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
	var i;
	return regeneratorRuntime.wrap(function range$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					if (!(begin < end)) {
						_context.next = 10;
						break;
					}

					i = begin;

				case 2:
					if (!(i < end)) {
						_context.next = 8;
						break;
					}

					_context.next = 5;
					return i;

				case 5:
					i += interval;
					_context.next = 2;
					break;

				case 8:
					_context.next = 17;
					break;

				case 10:
					i = begin;

				case 11:
					if (!(i > end)) {
						_context.next = 17;
						break;
					}

					_context.next = 14;
					return i;

				case 14:
					i += interval;
					_context.next = 11;
					break;

				case 17:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this);
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

function bubbleSort(array) {
	var cmp = arguments.length <= 1 || arguments[1] === undefined ? function (a, b) {
		return a - b;
	} : arguments[1];

	var swap = function swap(index) {
		var temp = array[index];
		array[index] = array[index - 1];
		array[index - 1] = temp;
	};

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = range(0, array.length)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var outerIndex = _step.value;
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = range(outerIndex, 0, -1)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var innerIndex = _step2.value;

					if (cmp(array[innerIndex], array[innerIndex - 1]) < 0) {
						swap(innerIndex);
					}
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
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