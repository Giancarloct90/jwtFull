const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let users = new Schema({
    nombre: {
        type: String,
        required: [true, 'El Nombre es campo obligatorio']
    },
    contrasenia: {
        type: String,
        required: [true, 'La contrasenia es real']
    },
    numero: {
        type: String,
        required: [true, 'El numero es obligatorio']
    }
});

module.exports = mongoose.model('Users', users);