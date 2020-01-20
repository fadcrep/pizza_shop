var express = require("express");
var multer = require('multer');
var app = express();


const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'pdf': 'pdf'
};


app.use(express.static('public'));
app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + "/" + "pizza.html")
})
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const extension = MIME_TYPES[file.mimetype];
        cb(null, file.fieldname + '-' + Date.now() + "." + extension)
    }
})
var upload = multer({ storage: storage })
app.post('/process_get', upload.single('file'), function (req, res) {
    response = {
        Qte: req.body.quantity,
        type: req.body.type,
        address: req.body.address,
        numero: req.body.phone,
        message: req.body.message,
        imageUrl: `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`
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
