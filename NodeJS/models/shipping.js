const mongoose = require('mongoose');

var Shipping = mongoose.model('Shipping',{
    type:{ type: String},
    price: {type: Number}
});

module.exports = { Shipping } ;