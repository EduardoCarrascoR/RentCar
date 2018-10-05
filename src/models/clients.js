const mongoose = require( 'mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    car: [{
        type: Schema.Types.ObjectId,
        ref: 'car'
    }]

});


module.exports = mongoose.model('client', clientSchema);