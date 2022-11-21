const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:userId', (req, res) => {
    // GET route code here

    const sqlText = `SELECT "round_id", "user_id", "course_id", "course_name", "date", "time", "hole_num", "par", "score"
    FROM "round"
    JOIN "score" ON "score".round_id = "round".id
    WHERE "user_id" = $1
    ORDER BY "round_id" DESC;`;

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