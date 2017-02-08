var expect = require("chai").expect;
var mongoose = require("mongoose");
var jobModel = require('../models/Job');
var Promise = require("bluebird");

var jobService = require("../jobs-data");




function resetJobs() {
    return new Promise(function(resolve, reject) {
        mongoose.connection.collections['jobs'].drop(resolve, reject);
    });
}

describe("get jobs", function() {

    var jobs;

    before(function(done) {
        jobService.connectDB('mongodb://localhost/jobfinder')
            .then(resetJobs)
            .then(jobService.seedJobs)
            .then(jobService.findJobs)
            .then(function(jobsList) {
                jobs = jobsList;
                done();
            });
    });
    it("should never be empty", function() {

        expect(jobs.length).to.be.at.least(1);

    });

    it("should have a job with a title", function() {
        expect(jobs[0].title).to.not.be.empty;
    });

    it("should have a job with a description", function() {
        expect(jobs[0].desc).to.not.be.empty;
    });
})
