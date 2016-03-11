var sortTestCase = require('./sort.testcase.js');
var quickSort =
	  require('../../lib/sorting/quicksort-middle.js').quickSort;

sortTestCase(quickSort, 'Quick sort');
