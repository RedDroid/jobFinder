var mongoose = require("mongoose");

var jobSchema = mongoose.Schema({
    title: {
        type: String
    },
    desc: {
        type: String
    }
});


mongoose.model('Job', jobSchema);


