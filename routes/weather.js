var https = require("https");

module.exports.run_setup = function(app){
    app.get('/weatherForm', function(req,res){
       res.render('weatherForm'); 
    });
    
    function getLocationInfo(req, res, next){
        var lat = Math.round(req.query.lat * 100) / 100;
        var long = Math.round(req.query.long * 100) / 100;
        
        console.log(lat + ", " + long);
        
        var url = 'https://api.weather.gov/points/'+ lat +',' + long;
        var options =  { headers : { 'User-Agent': 'request'}};
        
        https.get(url, options, function(response) {
          response.on('data', function(d) {
        
            // console.log(d.toString())
            var obj = JSON.parse( d.toString() );
            res.locals.locationObj = obj;
            try{
                res.locals.forecastUrl = obj.properties.forecast;
                console.log(res.locals.forecastUrl);
                if(res.locals.forecastUrl === null){
                    throw "bad url";
                }
            }
            catch(e){
                res.send("don't have weather info for this location");
            }
            next();
          });
        });
    }
    
    function getForecast(req, res, next){
        var locationObj = res.locals.locationObj;
        var forecastUrl = res.locals.forecastUrl;
        var options =  { headers : { 'User-Agent': 'request'}};
        
        https.get(forecastUrl, options, function(response) {
          response.on('data', function(d) {
        
            // console.log(d.toString())
            var obj = JSON.parse( d.toString() );
            res.locals.forecastObj = obj;
            res.locals.periods = obj.properties.periods;
            next();
          });
        
        
        }).on('error', function(e) {
            // console.error(e);
        });
    }
    
    app.get('/weather', [getLocationInfo, getForecast], function(req, res){
        var locationObj = res.locals.locationObj; //obj holding A LOT of location data
        var forecastList = res.locals.periods; // list of objects holding daily forecast info
        var relativeLocation = locationObj.properties.relativeLocation.properties; //object with info on location
        
        var city = relativeLocation.city; //string of city name
        var state = relativeLocation.state; //string of state name
        
        var json = req.query.json;
       
        if(json == "true"){
            res.json({city:city, state:state, allDays: forecastList});
        }
        res.render('weather', {city:city, state:state, allDays: forecastList});
    });
};