// const express = require('express');
// var router = express.Router();
// var ObjectId = require('mongoose').Types.ObjectId;

var { Shipping } = require('../models/shipping');

// var shipping = new Shipping({
//     "type": "Overnight",
//     "price": 25.99
// })

// shipping.save((err,doc) => {
//     if(!err) { console.log(doc); }
//     else { console.log('Error in Product Save: '+ JSON.stringify(err, undefined, 2)); }
// });

module.exports.shippping = (req,res) => {
    Shipping.find((err, docs) => {
        if(!err) {
            res.send(docs); 
        }
        else{
            console.log('Error in Retriving Products :' + JSON.stringify(err, undefined, 2));
        }
    });
}

// router.get('/', (req,res) => {
//     Shipping.find((err, docs) => {
//         if(!err) {
//             res.send(docs); 
//         }
//         else{
//             console.log('Error in Retriving Products :' + JSON.stringify(err, undefined, 2));
//         }
//     });
// });


// module.exports = router;