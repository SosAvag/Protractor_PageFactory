const {browser} = require("protractor");
exports.config = {
    directConnect: true,

    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
            args: ['--window-size=1800,600']
        }
    },

    framework: 'jasmine',
    specs: ['../tests/tests.spec.js'],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 300000
    },


};