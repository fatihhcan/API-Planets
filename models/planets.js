const mongoose = require('mongoose');

const postSchema = mongoose.Schema({

    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Posts', postSchema);