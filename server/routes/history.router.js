const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:userId', (req, res) => {
    // GET route code here

    

    // const sqlText = `SELECT "round_id", "user_id", "course_id", "course_name", "date", "time", "hole_num", "par", "score"
    // FROM "round"
    // JOIN "score" ON "score".round_id = "round".id
    // WHERE "user_id" = $1
    // ORDER BY "round_id" DESC;`;

    const sqlText = `SELECT *
    FROM "round"
    WHERE "user_id" = $1
    ORDER BY "id" DESC;`;

    pool.query(sqlText, [req.params.userId])

        .then((result) => {

            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);

            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    // GET route code here

    const queryText = `DELETE
    FROM "round"
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