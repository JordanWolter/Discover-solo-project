const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
    // GET route code here

    const queryText = `SELECT * 
    FROM "bag"
    WHERE "user_id" = $1;`;

    const queryParams = [req.params.id];

    pool.query(queryText, queryParams)

        .then((result) => {

            res.send(result.rows)

        }).catch((error) => {
            console.log('User registration failed: ', error);
            res.sendStatus(500);
        })
});

router.post('/', (req, res) => {
    // POST route code here

    // console.log('IIDIDIDIDIIDIDI', req.body.dataId)
    // console.log('IIDIDIDIDIIDIDI', req.body)

    const queryText = `INSERT INTO "bag"(user_id, data_id, 
        brand, name, flight_type, 
        speed, fade, glide, turn, flight_path)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`;

    const queryParams = [req.body.user, req.body.disc.dataId,
    req.body.disc.brand, req.body.disc.name,
    req.body.disc.flightType, req.body.disc.speed,
    req.body.disc.fade, req.body.disc.glide,
    req.body.disc.turn, req.body.disc.flightPath];

    pool.query(queryText, queryParams)

        .then((response) => {

            res.sendStatus(201);

        }).catch((err) => {

            console.log('User registration failed: ', err);
            res.sendStatus(500);

        })
});

router.delete('/:id', (req, res) => {
    // GET route code here

    const queryText = `DELETE
    FROM "bag"
    WHERE "id" = $1;`;

    const queryParams = [req.params.id];

    pool.query(queryText, queryParams)

        .then((result) => {

            res.send(result.rows)

        }).catch((error) => {

            console.log('User registration failed: ', error);
            res.sendStatus(500);

        })
});





module.exports = router;