var express = require("express");
var app = express();
var jobModel = require("./models/Job");
var jobService = require("./jobs-data");



app.set('views', __dirname);


app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));


app.get('/api/jobs', function(req, res) {
    jobService.findJobs({}).then(function(collection) {
        res.send(collection);
    })
});

app.get('*', function(req, res) {
    res.render('index');
});


//mongoose.connect('mongodb://localhost/jobfinder');
jobService.connectDB('mongodb://psdev:demo123@ds111529.mlab.com:11529/jobfinder').then(function() {
    console.log("connected to mongodb successfully !!!");
    jobService.seedJobs();
});


app.listen(process.env.PORT, process.env.IP);
