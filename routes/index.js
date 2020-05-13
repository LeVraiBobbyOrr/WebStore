var express = require('express');
var router = express.Router();
var Inventory = require('../models/inventory')

var itemTest = {
    name: 'item4',
    price: '4.99',
    amount: '10',
    imageUrl: '/images/item1.png'
}

router.get('/', function (req, res, next) {
	Inventory.find({}).exec(function (error, data) {
		if (!error) {
			res.send(data);
		} else {
			res.status(400).send(error);
		}
	});
});

router.get('/cart', function (req, res, next) {
	res.send('Cart');
});

module.exports = router;
