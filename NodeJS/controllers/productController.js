const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Product } = require('../models/product');

// var product = new Product({
//     name: 'Phone Standard',
//     price: 299,
//     description: ''
// })

// product.save((err,doc) => {
//     if(!err) { console.log(doc); }
//     else { console.log('Error in Product Save: '+ JSON.stringify(err, undefined, 2)); }
// });

router.get('/', (req,res) => {
    Product.find((err, docs) => {
        if(!err) {
            res.send(docs); 
        }
        else{
            console.log('Error in Retriving Products :' + JSON.stringify(err, undefined, 2));
        }
    });
});

module.exports = router;