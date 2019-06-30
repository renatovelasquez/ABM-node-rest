let mongoose = require('mongoose');
//mongodb+srv://mlabuser:<password>@cluster0-a8jpz.azure.mongodb.net/test?retryWrites=true&w=majority

const server = 'cluster0-a8jpz.azure.mongodb.net';
const database = 'test';
const user = 'mlabuser';
const password = 'jeflNsrBwld0ZNYU';

mongoose.connect('mongodb+srv://mlabuser:jeflNsrBwld0ZNYU@cluster0-a8jpz.azure.mongodb.net/test?retryWrites=true&w=majority');
let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Customer', CustomerSchema);
