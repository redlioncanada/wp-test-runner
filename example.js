var iterator = require('./index')

iterator.test({
	brand: 'wp',
	match: function($, html) {
		return html.indexOf('MHW5400DW') > -1
	},
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
}, 'results.json')