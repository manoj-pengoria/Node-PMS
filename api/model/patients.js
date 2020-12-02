const mongoose = require('mongoose');
const validator = require('validator');

const patientsSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    Client_ID: {
        type: String,
        required: true
    },
    EHR_ID: {
        type: String,
        required: true
    },
    Patient_Name: {
        type: String,
        required: true
    },
    Mobile_Number: {
        type: String,
        required: true
    },
    SSN: {
        type: String
    },
    Address1: {
        type: String,
        required: true
    },
    Address2: {
        type: String
    },
    Country: {
        type: String,
        required: true
    },
    State: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    },
    ZipCode: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        trim: true,
        index: true,
        unique: true,
        required: true
    },
    Date_entered: {
        type: Date
    }
}, {collection: 'Patients'})

module.exports = mongoose.model('Patients',patientsSchema);