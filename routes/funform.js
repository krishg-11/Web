

module.exports.run_setup = function(app){
    app.get('/funform', function(req,res){
       res.render('funform'); 
    });
    
    
    app.get('/madlibs', function(req, res){
        var verb1 = req.query.verb1;
        var place1 = req.query.place1;
        var song = req.query.song;
        var adj1 = req.query.adj1;
        var adj2 = req.query.adj2;
        var friend = req.query.friend;
        var verb2 = req.query.verb2;
        var verb3 = req.query.verb3;
        var time = req.query.time;
        var verb4 = req.query.verb4;
        var noun1 = req.query.noun1;
        var place2 = req.query.place2;
        var relative = req.query.relative;
        var number = req.query.number;
        var food = req.query.food;
        
        res.render('madlibs', {verb1:verb1, place1:place1, song:song, adj1:adj1, adj2:adj2, 
                                friend:friend, verb2:verb2, verb3:verb3, time:time, verb4:verb4,
                                noun1:noun1, place2:place2, relative:relative, number:number, food:food
        });
    });
};

