const mongoose = require("mongoose");

const newSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
});

const collection = mongoose.model("collection", newSchema);

module.exports = collection; // Export the collection
