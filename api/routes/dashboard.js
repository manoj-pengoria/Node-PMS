const express = require('express');
const router = express.Router();
const Patients = require('../model/patients');
const Offers = require('../model/offers');
const Transactions = require('../model/transactions');
const mongoose = require('mongoose');

// router.post('/',(req,res,next)=>{
//     var pstatus = req.body.status;
//     var from_date = new Date(req.body.fromdate);
//     var to_date = new Date(req.body.todate);
    
    
//     Offers.find({
//         "$and": [
//             { "Current_Status": pstatus }
//          ]
//     })
//     .then(result=>{
//         res.status(200).json({
//             Data : {"Count":result.length}
//         });
//     })
//     .catch(err=>{
//         console.log(err);
//         res.status(500).json({
//             error:err
//         })
//     });

//     console.log('Status data = '+pstatus+' filterdata = '+from_date+' - '+to_date);
// });

/**====Start Active Patients Graph Data API====**/

router.post('/active-patients-graph',(req,res,next)=>{
    let pstatus = req.body.status;
    let from_date = new Date(req.body.fromdate);
    let to_date = new Date(req.body.todate);
    const FromdatetoISo = from_date.toISOString();
    const TodatetoISo = to_date.toISOString();
    const monthsArray = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
    
    Offers.aggregate([
        { 
            $match: {
                Current_Status: { "$in": pstatus },
                Dt_of_Procedure: {"$gte": new Date(FromdatetoISo), "$lt": new Date(TodatetoISo)}
            }
        },
        { 
            $group: {
                _id: { "year_month": { $substrCP: [ "$Dt_of_Procedure", 0, 7 ] } }, 
                count: { $sum: 1 }
            }
        },
        {
            $sort: { "_id.year_month": 1 }
        },
        { 
            $project: {
                _id: 0, 
                count: 1, 
                month_year: { 
                    $concat: [ 
                       { $arrayElemAt: [ monthsArray, { $subtract: [ { $toInt: { $substrCP: [ "$_id.year_month", 5, 2 ] } }, 1 ] } ] },
                       "-", 
                       { $substrCP: [ "$_id.year_month", 0, 4 ] }
                    ] 
                }
            } 
        },
        { 
            $group: {
                _id: null, 
                data: { $push: { month_year: "$month_year", total_count: "$count" } }
            }
        },
        {
            $project: {
                Active_Patients: "$data", 
                _id: 0 
            }
        }
    ])
    .then(result=>{
        res.status(200).json({
            Data : result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
});

/**====End Active Patients Graph Data API====**/

/**====Start Daily Deposit Graph Data API====**/

router.post('/daliy-deposit-graph',(req,res,next)=>{
    let from_date = new Date(req.body.fromdate);
    let to_date = new Date(req.body.todate);
    const Fromdatetrans = from_date.toISOString();
    const Todatetotrans = to_date.toISOString();
    
    const monthsArray = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
    
    Transactions.aggregate([
        { 
            $match: {
                Payment_Date: {"$gte": new Date(Fromdatetrans), "$lt": new Date(Todatetotrans)}
            }
        },
        { 
            $group: {
                _id: { "year_month": { $substrCP: [ "$Payment_Date", 0, 7 ] } }, 
                count: { $sum: 1 },
                tot_amt: { $sum: "$Payment_amt"}
            }
        },
        {
            $sort: { "_id.year_month": 1 }
        },
        { 
            $project: {
                _id: 0, 
                count: 1,
                tot_amt: 1, 
                month_year: { 
                    $concat: [ 
                       { $arrayElemAt: [ monthsArray, { $subtract: [ { $toInt: { $substrCP: [ "$_id.year_month", 5, 2 ] } }, 1 ] } ] },
                       "-", 
                       { $substrCP: [ "$_id.year_month", 0, 4 ] }
                    ] 
                }
            } 
        },
        { 
            $group: {
                _id: null, 
                data: { $push: { month_year: "$month_year", total_count: "$count", total_amount: "$tot_amt" } }
            }
        },
        {
            $project: {
                Daliy_Deposit: "$data", 
                _id: 0 
            }
        }
    ])
    .then(result=>{
        res.status(200).json({
            Data : result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
});

/**====End Daily Deposit Graph Data API====**/

/**====Start Patients Month Wise Data API====**/

router.post('/patients-data',(req,res,next)=>{
    let pstatus = req.body.status;
    let patient_name = req.body.patient_name;
    let from_date = new Date(req.body.fromdate);
    let to_date = new Date(req.body.todate);
    const FromdatetoISo = from_date.toISOString();
    const TodatetoISo = to_date.toISOString();
    const monthsArray = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
    
    Patients.aggregate([
        { "$lookup": {
            "from": "Offers",
            "localField": "_id",
            "foreignField": "Patient_ID",
            "as": "Offersdata"
        }}
    ])
    .then(result=>{
        res.status(200).json({
            Active_Patients_Data : result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
});

/**====End Patients Month Wise Data API====**/

module.exports = router;