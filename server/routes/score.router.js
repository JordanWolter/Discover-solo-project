const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:roundId', (req, res) => {
    // GET route code here

    const sqlText = `SELECT * 
    FROM "score" 
    WHERE "round_id" = $1
    ORDER BY "hole_num" ASC;`;

    pool.query(sqlText, [req.params.roundId])

        .then((result) => {

            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);

            res.sendStatus(500);
        });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    // POST route code here
    console.log(req.body);
    const roundId = req.body.roundId
    const newScore = req.body.holeScore;
    const newHole = parseInt(req.body.holeNum);
    const newPar = req.body.holePar

    const sqlText = `INSERT INTO "score" (round_id, hole_num, par, score) 
    VALUES ($1, $2, $3, $4)`;

    pool.query(sqlText, [roundId, newHole, newPar, newScore])
        .then((result) => {

            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);

            res.sendStatus(500);
        });
});

module.exports = router;