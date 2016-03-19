'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A binary heap is a complete binary tree which
 * satisfies the heap ordering property.
 *
 * @example
 * var Heap = require('path-to-algorithms/src/data-structures/heap').Heap;
 *
 * var heap = new Heap(function(a, b) {
 *     return a.birthyear - b.birthyear;
 * });
 *
 * heap.add({
 *     name: 'John',
 *     birthyear: 1981
 * });
 * heap.add({
 *     name: 'Pavlo',
 *     birthyear: 2000
 * });
 * heap.add({
 *     name: 'Garry',
 *     birthyear: 1989
 * });
 * heap.add({
 *     name: 'Derek',
 *     birthyear: 1990
 * });
 * heap.add({
 *     name: 'Ivan',
 *     birthyear: 1966
 * });
 *
 * console.log(heap.extract()); // { name: 'Pavlo', birthyear: 2000 }
 * console.log(heap.extract()); // { name: 'Derek', birthyear: 1990 }
 * console.log(heap.extract()); // { name: 'Garry', birthyear: 1989 }
 * console.log(heap.extract()); // { name: 'John', birthyear: 1981 }
 * console.log(heap.extract()); // { name: 'Ivan', birthyear: 1966 }
 *
 * @module data-structures/heap
 */

/**
 * Minimum heap constructor.
 *
 * @public
 * @constructor
 * @param {Function} cmp Function used for comparison between the elements.
 */

var Heap = function () {
	function Heap(cmp) {
		_classCallCheck(this, Heap);

		this._heap = [];
		if (typeof cmp === 'function') {
			this._cmp = cmp;
		} else {
			this._cmp = function (a, b) {
				return a - b;
			};
		}
	}

	/**
  * Exchange indexes with start index given as argument
  * to turn the tree into a valid heap. On a single call
  * this method maintains only a single "branch" of the heap.<br><br>
  *
  * Time complexity: O(log N).
  *
  * @private
  * @param {Number} index The parent.
  */

	_createClass(Heap, [{
		key: '_heapify',
		value: function _heapify(index) {
			var extr = index;
			var left = 2 * index + 1;
			var right = 2 * index + 2;
			var temp = undefined;

			if (left < this._heap.length && this._cmp(this._heap[left], this._heap[index]) > 0) {
				extr = left;
			}

			if (right < this._heap.length && this._cmp(this._heap[right], this._heap[index]) > 0) {
				extr = right;
			}

			if (index !== extr) {
				temp = this._heap[index];
				this._heap[index] = this._heap[extr];
				this._heap[extr] = temp;
				this._heapify(extr);
			}
		}

		/**
   * Changes the key.<br><br>
   * Complexity: O(log N).
   *
   * @public
   * @param {Number} index Index of the value which should be changed.
   * @param {Number|Object} value New value according to the index.
   * @return {Number} New position of the element.
   */

	}, {
		key: 'changeKey',
		value: function changeKey(index, value) {
			this._heap[index] = value;
			var elem = this._heap[index];
			var parent = Math.floor(index / 2);
			var temp = undefined;
			if (elem !== undefined) {
				while (parent >= 0 && this._cmp(elem, this._heap[parent]) > 0) {
					temp = this._heap[parent];
					this._heap[parent] = elem;
					this._heap[index] = temp;
					index = parent;
					parent = Math.floor(parent / 2);
				}
			}
			return parent;
		}

		/**
   * Updates a given node. This operation is useful
   * in algorithms like Dijkstra, A* where we need
   * to decrease/increase value of the given node.
   *
   * @public
   * @param {Number|Object} node Node which should be updated.
   */

	}, {
		key: 'update',
		value: function update(node) {
			var idx = this._heap.indexOf(node);
			if (idx >= 0) {
				this.changeKey(idx, node);
			}
		}

		/**
   * Adds new element to the heap.<br><br>
   * Complexity: O(log N).
   *
   * @public
   * @param {Number|Object} value Value which will be inserted.
   * @return {Number} Index of the inserted value.
   */

	}, {
		key: 'add',
		value: function add(value) {
			this._heap.push(value);
			return this.changeKey(this._heap.length - 1, value);
		}

		/**
   * Returns current value which is on the top of the heap.<br><br>
   * Complexity: O(1).
   *
   * @public
   * @return {Number|Object} Current top value.
   */

	}, {
		key: 'top',
		value: function top() {
			return this._heap[0];
		}

		/**
   * Removes and returns the current extremum value
   * which is on the top of the heap.<br><br>
   * Complexity: O(log N).
   *
   * @public
   * @returns {Number|Object} The extremum value.
   */

	}, {
		key: 'extract',
		value: function extract() {
			if (!this._heap.length) {
				throw 'The heap is already empty!';
			}
			var extr = this._heap.shift();
			this._heapify(0);
			return extr;
		}
	}, {
		key: 'getCollection',
		value: function getCollection() {
			return this._heap;
		}

		/**
   * Checks or heap is empty.
   *
   * @public
   * @returns {Boolean} Returns true if heap is empty.
   */

	}, {
		key: 'isEmpty',
		value: function isEmpty() {
			return !this._heap.length;
		}
	}]);

	return Heap;
}();

exports.Heap = Heap;