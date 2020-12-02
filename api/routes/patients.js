const express = require('express');
const router = express.Router();
const Patients = require('../model/patients');
const Offers = require('../model/offers');
const mongoose = require('mongoose');

// router.get('/',(req,res,next)=>{
//     Patients.find()
//     .then(result=>{
//         res.status(200).json({
//             patientData:result
//         });
//     })
//     .catch(err=>{
//         console.log(err);
//         res.status(500).json({
//             error:err
//         })
//     });
// });


// {
//     "$project": {
//         "_id": {
//         "$toString": "$_id"
//         },
//         "Patient_Name":1,
//         "Mobile_Number":1,
//         "numOfStudents":{"$size":"$offersData"}
//     }
// },

router.get('/',(req,res,next)=>{
    Patients.aggregate([
        {
            "$project": {
                "_id": {
                    "$toString": "$_id"
                },
                "Patient_Name":1,
                "Mobile_Number":1
            }
        },
        {
            $lookup:
            {
                from:"Offers",
                localField:"_id",
                foreignField:"Patient_ID",
                as:"offersData"
            }
        }
    ])
    .then(result=>{
        res.status(200).json({
            Data:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });

});


// router.get('/',(req,res,next)=>{
//     Patients.aggregate([
//         {
//             $lookup:
//             {
//                 from:"Offers",
//                 let: {
//                     id: "$_id" //localField
//                 },
//                 pipeline: [
//                     {
//                         $match: {
//                             $expr:{
//                                 $and:[
//                                     {$eq: ["$Client_ID","PMS-001"]},
//                                     {
//                                             $eq:[
//                                                 "$$id", //localField variable it can be used only in $expr
//                                                 "$Parent_ID" //foreignField 
//                                             ]
//                                     }
//                                 ]
//                             }
//                         }
//                     }
//                 ],
//                 as:"offersDataa"
//             }
//         }
//     ])
//     .then(result=>{
//         res.status(200).json({
//             Data:result
//         });
//     })
//     .catch(err=>{
//         console.log(err);
//         res.status(500).json({
//             error:err
//         })
//     });

// });



module.exports = router;