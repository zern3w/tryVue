//Import and declare express
import {Router} from 'express';
import express = require('express');
import util = require('util');
import { DataHandler } from "./DataHandler";
var handler = new DataHandler();
import bodyParser = require('body-parser');

const app: express.Express = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
var port = 8000;

const router = Router();
// middleware to use for all requests
router.use(function (req, res, next) {
    // do logging
    console.log('################ REQEUST #######################');
    console.log('req.originalUrl: ' + req.originalUrl);
    console.log('################################################');
    next();
});
router.get('/', function (req, res) {
    res.json({
        message: 'hooray! welcome to our api!'
    });
});
router.route('/data')
    .get(function (req, res) {
        var result = handler.getAllData();
        res.json(result);
        console.log('################ Response #######################');
        console.log('result: ' + util.inspect(result, false, null));
        console.log('################################################');
    });
router.route('/data/:qr_code')
    .get(function (req, res) {
        var qr_code = req.params.qr_code;
        var result = handler.getData(qr_code);
        res.json(result);
        console.log('################ Response #######################');
        console.log('result: ' + util.inspect(result, false, null));
        console.log('################################################');
    });
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);
app.listen(port);
console.log('Server happens on port ' + port);