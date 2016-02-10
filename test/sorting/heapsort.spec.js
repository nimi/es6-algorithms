var sortTestCase = require('./sort.testcase.js');
var heapSort = require('../../lib/sorting/heapsort.js').heapSort;

sortTestCase(heapSort, 'Heap sort');
