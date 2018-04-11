var express = require('express');
var chalk = require('chalk');
var app = express();
var router = express.Router();

router.get('rest/emr', function(req, res) {
    res.status(200).send('all of emr details');
});
router.get('rest/emr/id', function(req, res) {
    res.status(200).send('emr id');
});
router.post('rest/emr', function(req, res) {
    res.status(200).send('Hello world');
});

app.use('/rest', router);

app.listen(process.env.PORT || 5000)