const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const cookieParser = require('cookie-parser');
require('./config/config');
require('./config/passportConfig');
 
const mongoose = require('./models/db.js');

const rtsIndex = require('./routes/mainRoute');

const passport = require('passport');

// const productController = require('./controllers/productController.js');
// const shipingController = require('./controllers/shippingController.js');
// const registerController = require('./controllers/userController.js');

var app = express();

//middleware
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200'}));
app.use(passport.initialize());
app.use('/', rtsIndex);


// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});

app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));


// app.use('/products', productController);
// app.use('/shipping', shipingController);
// app.use('/register', registerController);

