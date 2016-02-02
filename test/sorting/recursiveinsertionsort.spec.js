var sortTestCase = require('./sort.testcase.js');
var recursiveInsertionSort = require('../../lib/sorting/' +
	  'recursive-insertionsort.js').recursiveInsertionSort;

sortTestCase(recursiveInsertionSort, 'Recursive insertion sort');
