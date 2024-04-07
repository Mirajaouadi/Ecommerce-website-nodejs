const mongoose = require('mongoose');

const CategorieSchema = mongoose.Schema({
    username: {
            type: String,
            unique: [true, 'The login is unique']
           
    },
    email: {
            type: String,
            unique: [true, 'The email is unique']
           
    },
    password: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Categorie', CategorieSchema);