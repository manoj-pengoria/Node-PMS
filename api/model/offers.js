const mongoose = require('mongoose');

const offersSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    Patient_ID: {
        type: mongoose.Schema.Types.ObjectId,
        //type: String,
        ref: "Patients"
    },
    Procedure_Code: {
        type: String,
        required: true
    },
    Insurance_Plan: {
        type: String,
        required: true
    },
    Dt_of_Procedure: {
        type: Date,
        required: true
    },
    Total_Estimate: {
        type: Number,
        required: true
    },
    Copay_Deductables: {
        type: Number
    },
    Down_Pay: {
        type: Number
    },
    Total_EMI: {
        type: Number
    },
    APR: {
        type: Number
    },
    Start_Date: {
        type: Date
    },
    End_Date: {
        type: Date
    },
    Per_EMI_Amt: {
        type: Number
    },
    Down_Pay_Set: {
        type: String
    },
    Down_Pay_Type: {
        type: String
    },
    EMI_Pay_Type: {
        type: String
    },
    Down_Pay_Success: {
        type: String
    },
    Completed_EMI: {
        type: String
    },
    Current_Status: {
        type: String
    },
    Date_offered: {
        type: Date
    }
}, {collection: 'Offers'})

module.exports = mongoose.model('Offers',offersSchema);