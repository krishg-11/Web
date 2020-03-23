var weatherApp = require("./weather.js");
var numberApp = require("./number.js");
var funform = require("./funform.js");
var home = require("./home.js");
var voting = require('./voting.js');

module.exports.do_setup = function(app) {
    weatherApp.run_setup(app);
    funform.run_setup(app);
    home.run_setup(app);
    voting.run_setup(app);
    
    
    numberApp.run_setup(app);
};
