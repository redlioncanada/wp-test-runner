var iterator = require('./index')

iterator.test({
	brand: 'wp',
	environment: 'dev',
	match: function($, html) {
		return html.indexOf('2016_Whirlpool_VIBRATION_FREE_LIMITED_GUARANTEE') > -1
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
	filename: 'wp.json',
	callback: function(results) {
		console.log(results)
	}
})