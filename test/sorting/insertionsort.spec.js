var sortTestCase = require('./sort.testcase.js');
var insertionSort = require('../../lib/sorting/' +
	  'insertionsort.js').insertionSort;

sortTestCase(insertionSort, 'Insertion sort');
