// const express = require('express');
// var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Product } = require('../models/product');

// var product = new Product({
//     name: 'Tablet XL',
//     price: 299,
//     description: 'A large tablet with one of the best screens'
// })

// product.save((err,doc) => {
//     if(!err) { console.log(doc); }
//     else { console.log('Error in Product Save: '+ JSON.stringify(err, undefined, 2)); }
// });

// router.get('/products/', );

module.exports.get_products = (req,res) => {
    Product.find((err, docs) => {
        if(!err) {
            res.send(docs); 
        }
        else{
            console.log('Error in Retriving Products :' + JSON.stringify(err, undefined, 2));
        }
    }); 
}

module.exports.get_product_by_id = (req,res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    
    Product.findById(req.params.id, (err, doc) => {
        if(!err) { res.send(doc); }
        else{ console.log('Error in retriving Product: ' + JSON.stringify(err, undefined, 2)); }
    });
}; 

// router.get('/products/:id/', );

// module.exports = router;