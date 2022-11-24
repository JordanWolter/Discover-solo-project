const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
    // GET route code here

    console.log('>>>>>>>>>>>>>>>>>>>>>ID', req.params.id)

    const queryText = `SELECT * 
    FROM "bag"
    WHERE "id" = $1;`;

    const queryParams = [req.params.id];

    pool.query(queryText, queryParams)

        .then((result) => {

            res.send(result.rows[0])

        }).catch((error) => {
            console.log('User registration failed: ', error);
            res.sendStatus(500);
        })
});

router.put('/:id', (req, res) => {

    console.log('REQQQQQQUIUMMMMM', req.body)
    console.log('PARRAAAMS', req.params)

    const speed = parseFloat(req.body.speed);
    const fade = parseFloat(req.body.fade);
    const glide = parseFloat(req.body.glide);
    const turn = parseFloat(req.body.turn);
    const id = parseInt(req.body.user_id)

    console.log(speed, fade, glide, turn)

    const sqlText = `UPDATE "bag" 
    SET "brand" = $1,
    "name" = $2 ,
    "flight_type" = $3,
    "speed" = $4,
    "fade" = $5,
    "glide" = $6,
    "turn" = $7
    WHERE "user_id" = $8 AND
    "id" = $9;`;

    const sqlQuery = [
        req.body.brand,
        req.body.name,
        req.body.flight_type,
        speed,
        fade,
        glide,
        turn,
        id,
        req.body.id
    ]

    console.log(sqlQuery)

    pool.query(sqlText, sqlQuery)

        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

module.exports = router;