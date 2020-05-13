var Inventory = require('../models/inventory');
var express = require('express')
var router = express.Router()

router.all('/', (req, res) => {
    //var item4 = {
    //    name: 'item4',
    //    price: '4.99',
    //    amount: '10',
    //    imageUrl: '/images/item1.png'
    //}
    //var newItem = new Inventory(item4)
    //newItem.updateOne()
    //    .then(item => {
    //        res.status(201).send(item)
    //    })
    //    .catch(err => {
    //        res.status(500).json(err)
    //    })

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://127.0.0.1:27017/";
    
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("itemStore");
        var myquery = { name: "item1" };
        var newvalues = { $set: { amount: "100"} };
        dbo.collection("items").updateOne(myquery, newvalues, function (err, res) {
            if (err) throw err;
            console.log("1 document updated");
            db.close();
        });
    });
})

module.exports = router