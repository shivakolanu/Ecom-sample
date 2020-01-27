const mongoose = require('mongoose');

var Product = mongoose.model('Product',{
    name:{ type: String},
    price: {type: Number},
    description: {type: String}
});

module.exports = { Product } ;