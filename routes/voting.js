module.exports.run_setup = function(app){
    var voteCounter = {
        "joey":0,
        "rachel":0,
        "monica":0,
        "ross":0,
        "phoebe":0,
        "chandler":0
    };

    app.get('/votingInfo', function(req, res){
        var choice = req.query.choice;
        if(voteCounter.hasOwnProperty(choice)){
            voteCounter[choice] += 1;
        }
        res.json(voteCounter);
    });
    
    app.get('/votingForm', function(req, res){
        res.render('voting');
    });
};