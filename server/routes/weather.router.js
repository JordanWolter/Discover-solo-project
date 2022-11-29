const axios = require('../axios');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
require('dotenv').config();

/**
 * GET route template
 */
router.get('/:lat/:lng', (req, res) => {
    // GET route code here
    console.log('REQQQQQQ', req.params)
    axios({
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: { q: `${req.params.lat}, ${req.params.lng}` },
        headers: {
            'X-RapidAPI-Key': process.env.WEATHER_API_KEY,
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
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