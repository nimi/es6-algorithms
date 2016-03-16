/**
 * Linked list.
 *
 * @example
 *
 * var LL = require('path-to-algorithms/src/data-structures/linked-list');
 *
 * var linkedList = new LL.LinkedList();
 *
 * linkedList.push({
 *   name: 'John',
 *   birthyear: 1981
 * });
 * linkedList.push({
 *   name: 'Pavlo',
 *   birthyear: 2000
 * });
 * linkedList.push({
 *   name: 'Garry',
 *   birthyear: 1989
 * });
 * linkedList.push({
 *   name: 'Derek',
 *   birthyear: 1990
 * });
 * linkedList.push({
 *   name: 'Ivan',
 *   birthyear: 1966
 * });
 *
 * console.log(linkedList.shift().data); // { name: 'John', birthyear: 1981 }
 * console.log(linkedList.pop().data);   // { name: 'Ivan', birthyear: 1966 }
 *
 * @module data-structures/linked-list
 */

/**
 * Linked list node.
 *
 * @public
 * @constructor
 * @param {Object} data Data of the node.
 */
class Node {
	constructor(data) {
		/**
		 * Data of the node.
		 * @member {Object}
		 */
		this.data = data;
		/**
		 * Next node.
		 * @member {Node}
		 */
		this.next = null;
		/**
		 * Previous node.
		 * @member {Node}
		 */
		this.prev = null;
	}
}

/**
 * Linked list.
 *
 * @nnpublic
 * @constructor
 */
class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	/**
	 * Add data to the end of linked list.
	 *
	 * @public
	 * @method
	 * @param {Object} data Data which should be added.
	 */
	push(data) {
		const node = new Node(data);
		if (!this.head) {
			this.head = this.tail = node;
		} else {
			node.prev = this.tail;
			this.tail.next = node;
			this.tail = node;
		}
	}

	/**
	 * Add data to the beginning of linked list.
	 *
	 * @public
	 * @method
	 * @param {Object} data Data which should be added.
	 */
	unshift(data) {
		var node = new exports.Node(data);
		if (this.head === null) {
			this.head = this.tail = node;
		} else {
			node.next = this.head;
			this.head.prev = node;
			this.head = node;
		}
	};

	/**
	 * In order traversal of the linked list.
	 *
	 * @public
	 * @method
	 * @param {Function} cb Callback which should be executed on each node.
	 */
	inorder(cb = () => {}) {
		let current = this.head;
		while (current) {
			cb(current);
			current = current.next;
		}
	};

	/**
	 * Remove data from the linked list.
	 *
	 * @public
	 * @method
	 * @param {Object} data Data which should be removed.
	 * @return {Boolean} Returns true if data has been removed.
	 */
	remove(data) {
		if (this.head === null) {
			return false;
		}
		let current = this.head;
		while (current) {
			if (current.data === data) {
				if (current === this.head) {
					this.head = this.head.next;
					this.head.prev = null;
				} else if (current === this.tail) {
					this.tail = this.tail.prev;
					this.tail.next = null;
				} else {
					current.prev.next = current.next;
					current.next.prev = current.prev;
				}

				return true;
			}
			current = current.next;
		}
		return false;
	};

	/**
	 * Check if linked list contains cycle.
	 *
	 * @public
	 * @method
	 * @return {Boolean} Returns true if linked list contains cycle.
	 */
	hasCycle() {
		let fast = this.head;
		let slow = this.head;
		while (true) {
			if (fast === null) {
				return false;
			}
			fast = fast.next;
			if (fast === null) {
				return false;
			}
			fast = fast.next;
			slow = slow.next;
			if (fast === slow) {
				return true;
			}
		}
	}

	/**
	 * Return tail node from the linked list.
	 *
	 * @public
	 * @method
	 * @return {Node} Tail node.
	 */
	pop() {
		if (this.tail === null) {
			return null;
		}
		let temp = this.tail;
		this.tail = this.tail.prev;
		return temp;
	}

	/**
	 * Return head node from the linked list.
	 *
	 * @public
	 * @method
	 * @return {Node} Head node.
	 */
	shift() {
		if (this.head === null) {
			return null;
		}
		let temp = this.head;
		this.head = this.head.next;
		return temp;
	};

	/**
	 * Reverses the linked list recursively
	 *
	 * @public
	 * @method
	 */
	recursiveReverse() {
		const inverse = (current, next) => {
			if (!next) {
				return;
			}
			inverse(next, next.next);
			next.next = current;
		}

		if (!this.head) {
			return;
		}
		inverse(this.head, this.head.next);
		this.head.next = null;
		let temp = this.head;
		this.head = this.tail;
		this.tail = temp;
	}

	/**
	 * Reverses the linked list iteratively
	 *
	 * @public
	 * @method
	 */
	reverse() {
		if (!this.head || !this.head.next) {
			return;
		}
		let current = this.head.next;
		let prev = this.head;
		let temp;
		while (current) {
			temp = current.next;
			current.next = prev;
			prev.prev = current;
			prev = current;
			current = temp;
		}
		this.head.next = null;
		this.tail.prev = null;
		temp = this.head;
		this.head = prev;
		this.tail = temp;
	}

}

export {
	Node,
	LinkedList
}
