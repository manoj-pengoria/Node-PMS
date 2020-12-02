const mongoose = require('mongoose');

const transactionsSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    Offer_ID: {
        type: mongoose.Schema.Types.ObjectId,
        //type: String,
        ref: "Offers"
    },
    EMI_Month: {
        type: String,
        required: true
    },
    EMI_Year: {
        type: String,
        required: true
    },
    Payment_Date: {
        type: Date,
        required: true
    },
    Payment_amt: {
        type: String,
        required: true
    },
    Tenure: {
        type: Number
    },
    EMI_Sequence: {
        type: Number
    }
}, {collection: 'Transactions'})

module.exports = mongoose.model('Transactions',transactionsSchema);