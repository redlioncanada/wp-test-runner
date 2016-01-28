'use strict'
var request = require('request')
var cheerio = require('cheerio')
var async = require('async')
var fs = require('fs')

class testIterator {
	test(opts) {
		if (!opts.models || typeof(opts.models) !== 'object' || !opts.models.length) throw new Error('Must specify a list of models!')
		if (!opts.url) {
			if (!opts.brand) throw new Error('Must specify a brand! ka, mt, or wp.')
			switch(opts.brand.toLowerCase()) {
				case 'mt':
					opts.url = 'http://www.maytag.ca/webapp/wcs/stores/servlet/WHRORNAjaxCatalogSearchView?storeId=10229&catalogId=10579&langId=-300&beginIndex=0'
					break
				case 'ka':
					opts.url = 'http://www.kitchenaid.ca/webapp/wcs/stores/servlet/WHRORNAjaxCatalogSearchView?storeId=10231&catalogId=10581&langId=-300&beginIndex=0'
					break
				case 'wp':
					opts.url = 'http://www.whirlpool.ca/webapp/wcs/stores/servlet/WHRORNAjaxCatalogSearchView?storeId=10228&catalogId=10578&langId=-300&beginIndex=0'
					break
			}
		}
		this.opts = opts
		var results = {}
		var self = this

		async.series([
			function(cb1) {
				//fetch each model's url
				var data = {}
				var cnt = 0
				async.each(opts.models, function(model, cb2) {
					results[model] = {}

					request(opts.url+'&searchTerm='+model, function(error, response, body) {
						if (!error && response.statusCode == 200) {
							if (self.searchReturnedResults(self, body)) {
								results[model].exists = true
								results[model].url = self.getModelLink(self, body)
							} else {
								results[model].exists = false
							}
							cb2(error)
						} else {
							cb2(error)
						}
					})
				}, function(err) {
					cb1(err)
				})
			},
			function(cb1) {
				async.forEachOf(results, function(model, key, cb2) {
					if (!model.url) {
						cb2(false)
						return
					}

					request(model.url, function(error, response, body) {
						if (self.productDiscontinued(self, body)) {
							results[key].discontinued = true
							cb2(error)
						} else {
							if (!error && response.statusCode == 200) {
								switch(typeof opts.match) {
									case 'string':
										if (opts.match in body) {
											results[key].test = 'passed'
										} else {
											results[key].test = 'failed'
										}
										break
									case 'function':
										var test = opts.match.call(self,cheerio.load(body), body)
										results[key].test = test ? 'passed' : 'failed'
										break
								}
								cb2(error)
							} else {
								cb2(error)
							}
						}
					})
				}, function(err) {
					cb1(err)
				})
			},
			function(cb1) {
				if (opts.filename && typeof(opts.filename) === 'string') self.save(opts.filename,results)
				if (self.opts.callback && typeof(self.opts.callback) === 'function') self.opts.callback.call(self,results)
				cb1()
			}
		])
	}

	productDiscontinued(self, body) {
		return !body.indexOf('MSRP');
	}

	searchReturnedResults(self, body) {
		var $ = cheerio.load(body)
		switch(self.brand) {
			case "ka":
				return $('.product-link').length > 0
				break;
			default:
				return $('.applinceInfo_title').length > 0
		}
	}

	getModelLink(self, body) {
		var $ = cheerio.load(body)
		switch(self.brand) {
			case "ka":
				return $('.product_detail_set .product_row .product-link').first().attr('href')
				break;
			default:
				return $('.applince .applinceInfo_title a').first().attr('href')
		}
	}

	save(filename,results) {
		var self = this
		if (!filename) filename = 'output.json'
		if (results) {
			var out = {
				brand: self.opts.brand,
				date: new Date().toLocaleString(),
				results: results
			}

			var pretty = JSON.stringify(out, null, 4)
			fs.writeFile(filename, pretty, function(err) {
			})
		}
	}
}

module.exports = new testIterator();