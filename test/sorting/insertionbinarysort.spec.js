var sortTestCase = require('./sort.testcase.js');
var insertionBinarySort =
	  require('../../lib/sorting/' +
	  'insertion-binary-sort.js').insertionBinarySort;

sortTestCase(insertionBinarySort, 'Insertion binary sort');
