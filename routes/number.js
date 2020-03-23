module.exports.run_setup = function(app){
    
    var allFacts = [['1 is a number', '1 is the square root of 1', '1 is 1 squared', '1 is the smallest positive integer', '1/1=1', '1*1=1'], 
                    ['2 is a number', '2 is the least prime number', '2 is the only even prime number', '2 is even', '2 is the squre root of 4'], 
                    ['3 is a number', '3 is the least odd prime number', '3 is the squre root of 9', '3 is 3'], 
                    ['4 is a number', '4 is the least perfect square', '2^2=4', '4 is my favorite number'], 
                    ['5 is a number', '5 is cool', '5 is prime', '5*2=10']];
    app.get('/funpage', function(req, res){
        res.render('number');
    });
                    
    app.get('/:page', function(req, res){
        var info = req.params.page;
        var format = req.query.format;
        var numFacts = req.query.num_facts;
        
        if(info<6){
            var facts = allFacts[info-1];
        
        
            if(numFacts > facts.length)
                factsDict = {factsPassed : facts.concat(Array(numFacts-facts.length).fill("no more facts :("))};
            else
                factsDict = {factsPassed : facts.slice(0,numFacts)};
            
            
            if(format == "json")
                res.json(factsDict);
            
            res.render('numberInfo', factsDict);
        }
        else{
            res.send("incorrect URL");
        }
        
    });
    
};