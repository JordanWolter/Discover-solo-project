require('dotenv').config();
const express = require('express');
const pool = require('../modules/pool');
const axios = require('../axios');
const router = express.Router();

router.get('/:id', (req, res) => {
    // GET route code here

    // console.log('ID', req.params.id);

    axios({

        method: 'GET',
        url: 'https://www.dgcoursereview.com/api/',
        params: {
            key: 'q8npicfexmnibrfrr96q69af',
            mode: 'crsephto',
            id: req.params.id,
            sig: '491a59fedc331dbb97624be95e48c287'
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
