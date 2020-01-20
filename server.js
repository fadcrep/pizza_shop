var express = require("express");
var app = express();
app.use(express.static('public'));
app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + "/" + "pizza.html")
})

app.get('/process_get', function (req, res) {

    response = {
        Qte: req.query.quantity,
        type: req.query.type,
        address: req.query.address,
        numero: req.query.phone,
        message: req.query.message
    };

    console.log(response);
    res.end(JSON.stringify(response));
    //res.end("utilisateur créé avec succès");
})
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("le server tourne ! http://%s:%s", host, port)
})