var iterator = require('./index')

iterator.test({
	brand: 'mt',
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
	],
	callback: function(results) {
		console.log(results)
	}
}, 'mt.json')

iterator.test({
	brand: 'wp',
	models: [
		'WFW72HEDW',
		'WFW81HEDW',
		'WFW87HEDW',
		'WFW87HEDC',
		'WFW95HEDW',
		'WFW95HEDC',
		'WFW95HEDU',
		'WFW95HEDW',
		'WFW95HEDC',
		'WFW97HEDW',
		'WFW97HEDC',
		'WFW97HEDU',
		'WFW97HEDBD',
		'WFW75HEFW',
		'WFW7590FW',
		'WFW85HEFW',
		'WFW85HEFC',
		'WFW90HEFW',
		'WFW90HEFC',
		'WFW92HEFW',
		'WFW92HEFC',
		'WFW92HEFU',
		'WFW92HEFBD',
		'WFW9290FW',
		'WFW9290FC',
		'WFW9290FBD'
	],
	callback: function(results) {
		console.log(results)
	}
}, 'wp.json')