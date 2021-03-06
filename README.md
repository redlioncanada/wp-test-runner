# wp-test-runner
Runs tests against the whirlpool brand sites. Accepts a function to test against and a list of SKUs to test. Outputs results in json format.  
  
#Getting Started  
npm install  
  
#Example  

```
var iterator = require('./index')

iterator.test({
	brand: 'mt',
	environment: 'dev',
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

#Testing  
The `match` option may be given a function, or a string. If a function is given, that function returning true means that the test passed, otherwise it has failed.  

```
match: function($, html) {
	return true //passed
}
```

The function has two parameters. $, a [cheerio](https://github.com/cheeriojs/cheerio) instance, which is a html parser similar in syntax to jQuery, and the raw html string.  

```
match: 'Whirlpool has the most reliable site ever'
```
If `match` is passed a string and the raw html contains the string, the test has passed.  

#Example Output  
```
{
    "brand": "wp",
    "date": "1/28/2016, 11:09:44 AM",
    "results": {
        "WFW72HEDW": {
            "en": {
                "exists": true,
                "url": "http://cuat.whirlpool.ca/en_CA/-[WFW72HEDW]-1304732/WFW72HEDW/"
            },
            "fr": {
                "exists": true,
                "url": "http://cuat.whirlpool.ca/fr_CA/-[WFW72HEDW]-1304732/WFW72HEDW/"
            }
        },
        "MHW3500FW": {
            "en": {
                "exists": false
            },
            "fr": {
                "exists": false
            }
        },
    }
}
```

#Reference  
test(opts, filename);  
&nbsp;&nbsp;&nbsp;&nbsp;opts, required Object  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;brand, required String, The brand to test against. `MT`, `KA`, or `WP`.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;match, optional String or Function, the test to run  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;models, required Array, list of SKUs to test  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;environment, optional String, The environment to test in. `dev` or `live`, defaults to `live`  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;callback, optional Function, a function to call when complete  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;filename, optional String, name of file to output to
