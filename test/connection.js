const mongoose = require('mongoose');

//ES6 Promises if we get message about promises
//mongoose.Promise = global.Promise;

//establish connection before run the test
before(function (done) {
    //connect to mongodb
    mongoose.connect('mongodb://localhost/testbase');
    mongoose.connection.once('open', function () {
        console.log('Connection established my Queen ');
        done();
    }).on('error', function (error) {
        console.log('Connection error:', error);
    });
});
// Drop"delete it" the characters collection before each test
beforeEach(function (done) {
    //Drop collection
    mongoose.connection.collections.mariochars.drop(function () {
        done();
    });
});
