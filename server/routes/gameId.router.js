const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:user_id/:course_id/:date/:time', (req, res) => {
    // GET route code here

    const queryText = `SELECT "id" 
    FROM "round"
    WHERE "user_id" = $1
    AND "course_id" = $2
    AND "date" = $3
    AND "time" = $4;`;

    const queryParams = [req.params.user_id, req.params.course_id, req.params.date, req.params.time];

    pool.query(queryText, queryParams)

        .then((result) => {

            res.send(result.rows[0])

        }).catch((error) => {
            console.log('User registration failed: ', error);
            res.sendStatus(500);
        })
});


router.post('/', (req, res) => {
    // POST route code here

    const queryText = `INSERT INTO "round"(user_id, course_id, course_name, date, time)
  VALUES ($1, $2, $3, $4, $5);`;

    const queryParams = [req.body.user_id, req.body.course_id, req.body.course_name, req.body.date, req.body.time];

    pool.query(queryText, queryParams)

        .then((response) => {

            res.sendStatus(201);

        }).catch((err) => {

            console.log('User registration failed: ', err);
            res.sendStatus(500);

        })
});

module.exports = router;
