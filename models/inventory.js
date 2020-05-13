var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var itemSchema = new Schema({
	name: String,
	price: String,
	amount: String,
	imageUrl: String,
	description: String
});

var Inventory = mongoose.model('item', itemSchema);

module.exports = Inventory;
