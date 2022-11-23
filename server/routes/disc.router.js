const axios = require('../axios');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:type/:brandName', (req, res) => {
    // GET route code here
    let discURL = ''

    req.params.type === 10 ? discURL = `https://disc-golf.p.rapidapi.com/putter/brand/${req.params.brandName}` : 
    discURL = `https://disc-golf.p.rapidapi.com/brand/${req.params.brandName}`

    console.log(discURL)

    axios({
        method: 'GET',
        url: `${discURL}`,
        headers: {
            'X-RapidAPI-Key': 'b23c9e7e0dmsh09a141130375204p1268b9jsn19a226638ed0',
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