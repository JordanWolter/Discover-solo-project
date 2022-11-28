const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  console.log('############???????????????>>>>>>>>>>>>>>', req.body);
    const course_id = req.body.course_id;
    const user_id = req.body.user_id;
    const course_name = req.body.course_name;

    const sqlText = `INSERT INTO "favorite" (course_id, user_id, course_name) 
    VALUES ($1, $2, $3)`;

    pool.query(sqlText, [course_id, user_id, course_name])

        .then((result) => {

            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);

            res.sendStatus(500);
        });

});

module.exports = router;