var sortTestCase = require('./sort.testcase.js');
var bubbleSort =
	  require('../../lib/sorting/bubblesort.js').bubbleSort;

sortTestCase(bubbleSort, 'Bubble sort');
