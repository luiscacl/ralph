'use sctrict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DepositoSchema = Schema({
    restaurante: {type: Schema.ObjectId, ref: 'Restaurante'},
    cantidad: Number,
    metodoPago: String,
    nota: String,
    credito: Array,
    debe: Array,
    ralphDebe: Array,
    fecha: String
});

module.exports = mongoose.model('Deposito', DepositoSchema);