const mongoose = require('mongoose');

const ItemManagementSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    },
})


const ItemModel = mongoose.model('items', ItemManagementSchema);


module.exports = ItemModel;