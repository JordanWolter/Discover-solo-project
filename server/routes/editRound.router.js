const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
    // GET route code here

    console.log('//////////////ID', req.params.id)

    //"round".user_id = 1 AND 

    const queryText = `SELECT *
    FROM "score"
    JOIN "round" ON "round".id = "score".round_id
    WHERE "round".id = $1
    ORDER BY "round".id DESC, hole_num ASC;`;

    const queryParams = [req.params.id];

    pool.query(queryText, queryParams)

        .then((result) => {

            res.send(result.rows)

        }).catch((error) => {
            console.log('User registration failed: ', error);
            res.sendStatus(500);
        })
});

router.put('/:id', (req, res) => {

    console.log('PARRAAAMS', req.params);

    const sqlText = `UPDATE "score" 
    SET "score" = $1
    WHERE "user_id" = $2 AND
    "hole" = $3;`;

    const sqlQuery = [
        req.body.score,
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