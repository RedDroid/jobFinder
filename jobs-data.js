var mongoose = require("mongoose");
var Promise = require("bluebird");

var Job = mongoose.model('Job');

var jobs = [{
    title: "a1",
    desc: "good job"
}, {
    title: "a2",
    desc: "okay job"
}]

var findJobs = function(query) {
    return Promise.cast(Job.find(query).exec());
}


var createJob = Promise.promisify(Job.create, {
    context: Job
});

exports.seedJobs = function() {
    return findJobs({}).then(function(collection) {
        if (collection.length == 0) {
            return Promise.map(jobs, function(job) {
                return createJob(job);
            })
        }
    });

}

exports.findJobs = findJobs;

exports.saveJob=createJob;

exports.connectDB = Promise.promisify(mongoose.connect, {
    context: mongoose
});
