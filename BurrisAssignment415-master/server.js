var express = require('express');
var chalk = require('chalk');
var app = express();
var router = express.Router();

router.get('/emr', function(req, res) {
    res.status(200).send('all of emr details');
});
router.get('/emr/id', function(req, res) {
    res.status(200).send('emr id');
});
router.post('/emr', function(req, res) {
    res.status(200).send('Hello world');
});

app.use('/rest', router);

app.listen(1069, function(err) {
    if (err) {
        console.log(chalk.red(err));
    } else {
        console.log(chalk.blue('Magic Happens on Port 69'));
    }
});