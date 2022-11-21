const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:userId', (req, res) => {
    // GET route code here

    const sqlText = `SELECT "round_id"
    FROM "score"
    JOIN "round" ON "round".id = "score".round_id
    WHERE "user_id" = $1
    GROUP BY "round_id";`;

    pool.query(sqlText, [req.params.userId])

        .then((result) => {

            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);

            res.sendStatus(500);
        });
});

module.exports = router;