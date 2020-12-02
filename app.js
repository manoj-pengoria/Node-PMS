const express = require('express');
const app = express();

const patientRoute = require('./api/routes/patients');
const dashboardRoute = require('./api/routes/dashboard');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//mongoose.connect('mongodb+srv://SMS:Man@2020!!@schoolmanagement.88bzs.mongodb.net/schoolmanagement?retryWrites=true&w=majority', {useNewUrlParser: true});
//mongoose.connect('mongodb://localhost/admin', {useNewUrlParser: true});
mongoose.connect('mongodb+srv://server2020:server2020@vam-mongodb-server.y4tn9.mongodb.net/dbPMS?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected with database....');
}).catch((err) => {
    console.log('connection failed with database....');
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/patients', patientRoute);
app.use('/dashboard', dashboardRoute);

app.use((req,res,next)=>{
    // res.status(200).json({
    //     message: 'app is running'
    // })

    res.status(404).json({
        error: 'Bed request'
    })
})

module.exports = app;