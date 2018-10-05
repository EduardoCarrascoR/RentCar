const express = require('express');
const bodyP = require('body-parser');
const  morgan = require('morgan');
const  mongoose = require('mongoose');

const clients = require('./routes/clients');
const sellers = require('./routes/sellers');
mongoose.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true }).then(db => console.log('db is connected'))
.catch(err => console.log(err));
const app = express();

//settings
app.set('port', process.env.PORT || 3000);
//middleware
app.use(morgan('dev'));
app.use(bodyP.json());
//routes
app.use('/clients', clients);
app.use('/sellers', sellers);
//static files
//error handlers

// connect server
app.listen(app.get('port'), () =>{
    console.log('server on port: ', app.get('port'));
});