var sortTestCase = require('./sort.testcase.js');
var shellSort = require('../../lib/sorting/shellsort.js')
	  .shellSort;

sortTestCase(shellSort, 'Shell sort');
