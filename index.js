const express = require('express')

const app = express()

app.get('/', function (req, res) {
    console.log("Got a get envoie sur la homepage")
    res.send('SALUT GET')
})

app.get('/get_me', function (req, res) {
    console.log("Got a get envoie sur la homepage")
    res.send('SALUT GET')
})

app.post('/', function (req, res) {
    console.log("Got a POST envoie sur la homepage")
    res.send('SALUT POST')
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log(`le server tourne ! http://${host}:${port}`)
    console.log("le server tourne ! http://%s:%s", host, port)
})

