var express = require('express');
var app = express();
var expect = require("chai").expect;
var request = require("supertest");
var Promise=require("bluebird");

var dataSavedJob;

var db = {
    findJobs:function(){
        return new Promise(function(resolve,reject){
            resolve(["hi"]);
        })
    },
    saveJob: function(job) {
        dataSavedJob = job;
    }
};
var jobService = require("../../jobs-service")(db, app);

describe("get jobs", function() {
    it("get should give me a list of jobs ", function(done) {
        request(app).get('/api/jobs').expect('Content-type', /json/)
            .end(function(err, res) {
                expect(res.body).to.be.a('Array');
                done();
            })
    })
});

describe("save jobs", function() {

    it("should validate the title is grater than than 4 characters");
    it("should validate the title is less than than 40 characters");
    it("should validate the description is greater than 4 characters");
    it("should validate the title is less than 250 characters");


    var newJob = {
        title: "a2",
        desc: "okay job"
    };


    it("should pass the job to database save", function(done) {
        request(app).post('/api/jobs').send(newJob).end(function(err, res) {
            expect(dataSavedJob).to.deep.equal(newJob);
            done();
        });

    });
    it("should return a status of 200 to the frontend if the data is saved to db");
    it("should return a job with an id");
    it("should return an error if the database failed");




})
