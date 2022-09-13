const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();


app.use(cors())
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/getFile', function (req, res, next) {
    res.download('./public/ghaith.jpg', function (err) {
        if (err) {
            next(err);
        }
    })
})
app.use(function (err, req, res, next) {
    res.status(err.status).send(err);
})
app.listen(8081, function () {
    console.log("Server listening on port 8081");
})