
var visitorCount = 0;

module.exports.run_setup = function(app){
    app.get('/', function(req, res){
        console.log("index displayed");
        visitorCount++;
        console.log("Visitors: " + visitorCount);
        res.render('index', {num_visitors: visitorCount});
    });
}