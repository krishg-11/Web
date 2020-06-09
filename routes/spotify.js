
module.exports.run_setup = function(app){
    app.get('/spotify', function(req, res){
        res.render('spotify');
    });
    app.get('/spotifyLogin', function(req, res) {
        var scopes = 'user-top-read'; //add scopes to url to get better token
        my_client_id = "0ff8df3ab94e4a6ba8f5546c1c23e196"
        redirect_uri = "https://user.tjhsst.edu/2021kganotra/spotify"
        res.redirect('https://accounts.spotify.com/authorize' +
          '?response_type=token' +
          '&client_id=' + my_client_id +
          '&redirect_uri=' + redirect_uri +
          '&scope=' + scopes);
    });
}