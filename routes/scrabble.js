module.exports.run_setup = function(app){
    app.get('/scrabbleInfo', function(req, res){
        var letters = req.query.letters; //string of the letters
        
        //call python and res.json() the output 
        // Problem for later: when generating words, show loading screen while waiting
        
        console.log("fetching scrabble info");
        res.json({1:{1:'A', 2:'I'}, 2:{1:"IN", 2:"AI"}}) //placeholder, actually want to output data from python
    });
    app.get('/scrabble', function(req, res){
        res.render('scrabble');
    });
}