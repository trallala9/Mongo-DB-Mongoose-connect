const mongoose = require('mongoose');
//connect to mongodb

mongoose.connect('mongodb://localhost/testbase');


mongoose.connection.once('open', function () {
    console.log('Connection established my Queen ');
}).on('error', function (error) {
    console.log('Connection error:', error);
});
