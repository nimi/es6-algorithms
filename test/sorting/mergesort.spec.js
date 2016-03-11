var sortTestCase = require('./sort.testcase.js');
var mergeSort =
	  require('../../lib/sorting/mergesort.js').mergeSort;

sortTestCase(mergeSort, 'Merge sort');
