var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(req, res) {
	res.render('dogs.ejs');
});

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love.ejs",{thingVar : thing});
})

app.listen(port, () => console.log(`App is listening to port ${port}!`));
