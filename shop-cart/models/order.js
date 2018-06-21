var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
    user:{
        type: Schema.Types.ObjectId, ref: 'User'
    },

    cart: {
        type: Pbject, required: true
    },
    address: {
        type: String, required: true
    },
    name:{
        type: String, required: true
    },
    paymentId:{
        type: String, required: true
    }
});


module.export = mongoose.model('Order', schema);
