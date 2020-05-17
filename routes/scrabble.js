var child_process = require("child_process");

module.exports.run_setup = function(app){
    app.get('/scrabbleInfo', function(req, res){
        var letters = req.query.letters; //string of the letters
        
        //call python and res.json() the output 
        // Problem for later: when generating words, show loading screen while waiting
        console.log("fetching scrabble info");
        const spawn = child_process.spawn;
        const pythonProcess = spawn('python',["static/python/findWords.py", letters]);
        
        pythonProcess.stdout.on('data', (data) => {
            // Do something with the data returned from python script
            console.log("accessed python output");
            console.log("output from python: " + data);
            var stringData = data.toString().trim().replace(/'/g, '"');
            res.json(JSON.parse(stringData)) //placeholder, actually want to output data from python
        });
        
        
        
    });
    app.get('/scrabble', function(req, res){
        res.render('scrabble');
    });
}