define(function (require) {
    var registerSuite = require('intern!object');
    var assert = require('intern/chai!assert');
    var math = require('app/math');

    registerSuite({
        name: 'math',

        moveTwo: function () {
            assert.strictEqual(math.moveTwo(3), 5,
                'math.moveTwo should move the first argument two away from zero.');
            assert.strictEqual(math.moveTwo(-3), -5,
                'math.moveTwo should move the first argument two away from zero.');
        }
    });

});
