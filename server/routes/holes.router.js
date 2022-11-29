require('dotenv').config();
const express = require('express');
const pool = require('../modules/pool');
const axios = require('../axios');
const router = express.Router();

router.get('/:id', (req, res) => {
    // GET route code here

    axios({

        method: 'GET',
        url: 'https://www.dgcoursereview.com/api/',
        params: {
            key: 'q8npicfexmnibrfrr96q69af',
            mode: 'holeinfo',
            id: req.params.id,
            sig: '5b11b6866f5550f63c7e4426caff9df1'
        }

    }).then((apiRes) => {
        //console.log('API', apiRes.data);

        res.send(apiRes.data);

    }).catch((err) => {
        console.error('API req failed', err);

        res.sendStatus(500);

    })
});
module.exports = router;