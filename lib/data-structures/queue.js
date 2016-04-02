"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Queue.
 *
 * @example
 *
 * var Queue = require('path-to-algorithms/src/data-structures/queue');
 *
 * var queue = new Queue();
 *
 * queue.enqueue(1);
 * queue.enqueue(2);
 * queue.enqueue(3);
 *
 * console.log(queue.length();   // 3
 *
 * @module data-structures/queue
 */

/**
 * Queue.
 *
 * @public
 * @constructor
 */

var Queue = function () {
  function Queue() {
    _classCallCheck(this, Queue);

    this.queue = [];
  }

  _createClass(Queue, [{
    key: "enqueue",
    value: function enqueue(value) {
      this.queue.push(value);
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      return this.queue.shift();
    }
  }, {
    key: "peek",
    value: function peek() {
      return this.queue[0];
    }
  }, {
    key: "length",
    value: function length() {
      return this.queue.length;
    }
  }]);

  return Queue;
}();