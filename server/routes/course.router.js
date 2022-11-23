require('dotenv').config();
const express = require('express');
const pool = require('../modules/pool');
const axios = require('../axios');
const router = express.Router();

router.get('/:lat/:lng', (req, res) => {
    // GET route code here

    // console.log('lat', req.params.lat, 'lng', req.params.lng);

    //41.701992, -73.921895
    //chili
    //43.083944, -77.763394

    axios({

        method: 'GET',
        url: 'https://www.dgcoursereview.com/api_test/',
        params: {
            key: 'q8npicfexmnibrfrr96q69af',
            mode: 'near_rad',
            //lat: req.params.lat,
            //lon: req.params.lng,
            lat: 43.083944,
            lon: -77.763394,
            rad: 25,
            sig: '78be12174042beb06f3165531b8a1525'
        }

    }).then((apiRes) => {

        res.send(apiRes.data);

    }).catch((err) => {
        console.error('API req failed', err);

        res.sendStatus(500);

    })
});
module.exports = router;
