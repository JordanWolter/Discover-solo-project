const axios = require('../axios');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
require('dotenv').config();

router.get('/:type/:brandName', (req, res) => {
    // GET route code here
    let discURL = ''

    console.log('?????????', req.params)

    req.params.type === 10 ? discURL = `https://disc-golf.p.rapidapi.com/putter/brand/${req.params.brandName}` : 
    discURL = `https://disc-golf.p.rapidapi.com/brand/${req.params.brandName}`

    console.log(discURL)

    axios({
        method: 'GET',
        url: `${discURL}`,
        headers: {
            'X-RapidAPI-Key': process.env.DISC_API_KEY,
            'X-RapidAPI-Host': 'disc-golf.p.rapidapi.com'
        }
    }).then((apiRes) => {
        // console.log('API', apiRes.data);

        res.send(apiRes.data);

    }).catch((err) => {
        // console.error('API req failed', err);

        res.sendStatus(500);

    })

});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    // POST route code here
});

module.exports = router;