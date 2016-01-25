# wp-test-runner
Runs tests against the whirlpool brand sites. Accepts a match parameter to test against and a list of SKUs to test. Outputs results in json format.  
  
#Getting Started  
npm install  
  
#Example  

```
var iterator = require('./index')

iterator.test({
	brand: 'mt',
	match: function($) {
		return $('#displayAlert').length
	},
	models: [
		'MHW3100DW',
		'MHW4300DW',
		'MHW5100DW',
		'MHW5100DC',
		'MHW5400DW',
		'MHW5400DC',
		'MHW7100DW',
		'MHW7100DC',
		'MHW8100DW',
		'MHW8100DC',
		'MHW3500FW',
		'MHW5500FW',
		'MHW5500FC',
		'MHW8200FW',
		'MHW8200FC'
	]
}, 'results.json')
```  

#Reference  
test(opts, filename);  
    opts, required Object
        brand, required String, The brand to test against. MT, KA, or WP.  
        match, required String or Function, the test to run  
        models, required Array, list of SKUs to test  
    filename, optional String, name of file to output to
