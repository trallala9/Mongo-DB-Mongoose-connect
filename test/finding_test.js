//const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');


describe('Finding records', function () {
    beforeEach(function (done) {
        var char = new MarioChar({
            name: 'Mario'

        });
        char.save().then(function () {
            assert(char.isNew === false);
            done();
        });
    });

    // Ceate first test
    it('Finds a record to the database', function (done) {
        MarioChar.findOne({
            name: 'Mario'
        }).then(function (result) {
            assert(result.name === 'Mario');
            done();

        });
    });
});
