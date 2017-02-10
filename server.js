var express = require("express");
var app = express();
var jobModel = require("./models/Job");
var jobData = require("./jobs-data");

require("./jobs-service")(jobData,app);



app.set('views', __dirname);


app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));



app.get('*', function(req, res) {
    res.render('index');
});


//mongoose.connect('mongodb://localhost/jobfinder');
jobData.connectDB('mongodb://psdev:demo123@ds111529.mlab.com:11529/jobfinder').then(function() {
    console.log("connected to mongodb successfully !!!");
    jobData.seedJobs();
});


app.listen(process.env.PORT, process.env.IP);
