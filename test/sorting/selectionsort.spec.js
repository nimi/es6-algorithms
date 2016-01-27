var sortTestCase = require('./sort.testcase.js');
var selectionSort =
	  require('../../lib/sorting/selectionsort.js')
	  .selectionSort;

sortTestCase(selectionSort, 'Selection sort');
